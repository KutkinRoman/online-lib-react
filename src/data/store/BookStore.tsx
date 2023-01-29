import {InterfaceBookCategory} from "../entities/BookCategory";
import {InterfaceBook} from "../entities/Book";
import {makeAutoObservable} from "mobx";
import {BookCategoryService} from "../services/BookCategoryService";
import {BookService} from "../services/BookService";

export class BookStore {

    categories: InterfaceBookCategory[] = []
    currentCategory: InterfaceBookCategory | null = null

    books: InterfaceBook[] = []

    isFirst = true;
    isLast = false;
    isEmpty = true;
    totalElements = 0;
    totalPages = 0;
    size = 0;
    number = 0;

    isLoading = false

    constructor() {
        makeAutoObservable(this)
    }

    setCategories(categories: InterfaceBookCategory[]) {
        this.categories = categories;
    }

    setCurrentCategory(currentCategory: InterfaceBookCategory | null) {
        this.currentCategory = currentCategory
    }

    setBooks(books: InterfaceBook[]) {
        this.books = books
    }

    async initCategories() {
        const response = await BookCategoryService.getAll()
        this.setCategories(response.data)
    }

    async initPageByCategory(category: InterfaceBookCategory | null) {
        this.isLoading = true
        const response = await BookService.getPageByParams({
            categoryId: category && category.id,
            page: 0,
            size: 6
        })
        this.setBooks(response.data.content)
        this.updateParams(response.data)
        this.isLoading = false
    }

    async nextPageByCategory(category: InterfaceBookCategory | null) {
        this.isLoading = true
        const response = await BookService.getPageByParams({
            categoryId: category && category.id,
            page: this.number + 1,
            size: 6
        })
        this.setBooks([...this.books, ...response.data.content])
        this.updateParams(response.data)
        this.isLoading = false
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