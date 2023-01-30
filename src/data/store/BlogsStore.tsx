import {PageStore} from "./PageStore";
import {InterfaceBlog} from "../entities/Blog";
import {makeObservable} from "mobx";
import {BlogService} from "../services/BlogService";

export class BlogsStore extends PageStore<InterfaceBlog> {

    private static DEFAULT_PAGE_SIZE = 4;

    constructor() {
        super();
        makeObservable(this, {})
    }

    async initStartPage() {
        await this.initPage(0, BlogsStore.DEFAULT_PAGE_SIZE)
    }

    async initPrevPage() {
        await this.initPage(this.number - 1, BlogsStore.DEFAULT_PAGE_SIZE)
    }

    async initNextPage() {
        await this.initPage(this.number + 1, BlogsStore.DEFAULT_PAGE_SIZE)
    }

    async initPage(page: number, size: number) {
        try {
            this.isLoading = true
            const response = await BlogService.getPageByParams({
                page: page,
                size: size
            })
            this.setContent(response.data.content)
            this.updateParams(response.data)
        } catch (e) {
            console.error(e)
        } finally {
            this.isLoading = false
        }
    }
}