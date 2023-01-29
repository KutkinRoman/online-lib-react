import {InterfaceBookCategory} from "../entities/BookCategory";
import {InterfaceBook} from "../entities/Book";
import {makeAutoObservable} from "mobx";
import {BookCategoryService} from "../services/BookCategoryService";

export class BookStore {

    categories: InterfaceBookCategory[] = []
    currentCategory: InterfaceBookCategory | null = null

    books: InterfaceBook[] = []

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
}