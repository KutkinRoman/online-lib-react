import {InterfaceBookCategory} from "../entities/BookCategory";
import {InterfaceBook} from "../entities/Book";
import {makeObservable, observable} from "mobx";
import {BookCategoryService} from "../services/BookCategoryService";
import {BookService} from "../services/BookService";
import {PageStore} from "./PageStore";

export class BookStore extends PageStore<InterfaceBook> {

    categories: InterfaceBookCategory[] = []
    currentCategory: InterfaceBookCategory | null = null

    constructor() {
        super()
        makeObservable(this, {
            categories: observable,
            currentCategory: observable
        })
    }

    setCategories(categories: InterfaceBookCategory[]) {
        this.categories = categories;
    }

    setCurrentCategory(currentCategory: InterfaceBookCategory | null) {
        this.currentCategory = currentCategory
    }

    async initCategories() {
        const response = await BookCategoryService.getAll()
        this.setCategories(response.data)
    }

    async initPageByCategory(category: InterfaceBookCategory | null) {
      try {
          this.isLoading = true
          const response = await BookService.getPageByParams({
              categoryId: category && category.id,
              page: 0,
              size: 6
          })
          this.setContent(response.data.content)
          this.updateParams(response.data)
      }catch (e){
          console.error(e)
      } finally {
          this.isLoading = false
      }
    }

    async nextPageByCategory(category: InterfaceBookCategory | null) {
        try {
            this.isLoading = true
            const response = await BookService.getPageByParams({
                categoryId: category && category.id,
                page: this.number + 1,
                size: 6
            })
            this.setContent([...this.content, ...response.data.content])
            this.updateParams(response.data)
        }catch (e){
            console.error(e)
        } finally {
            this.isLoading = false
        }
    }

    updateParams(data: any) {
        this.isFirst = data.isFirst
        this.isLast = data.isLast
        this.isEmpty = data.isEmpty
        this.totalElements = data.totalElements
        this.totalPages = data.totalPages
        this.size = data.size
        this.number = data.number
    }
}