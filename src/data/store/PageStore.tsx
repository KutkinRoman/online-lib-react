import {makeObservable, observable} from "mobx";
import {InterfacePage} from "../entities/Page";

export class PageStore<T> {

    content: T[] = [];

    isFirst: boolean = true;
    isLast: boolean = false;
    isEmpty: boolean = true;
    isLoading: boolean = false;

    totalElements = 0;
    totalPages = 0;
    size = 0;
    number = 0;


    constructor() {
        makeObservable(this, {
            content: observable,

            isFirst: observable,
            isLast: observable,
            isEmpty: observable,
            isLoading: observable,

            totalElements: observable,
            totalPages: observable,
            size: observable,
            number: observable
        })
    }

    setContent(content: T[]) {
        this.content = content;
    }

    updateParams(page: InterfacePage<T>) {
        this.isFirst = page.isFirst
        this.isLast = page.isLast
        this.isEmpty = page.isEmpty
        this.totalElements = page.totalElements
        this.totalPages = page.totalPages
        this.size = page.size
        this.number = page.number
    }
}