import {InterfaceAuthor} from "../entities/Author";
import {makeAutoObservable} from "mobx";
import {AuthorService} from "../services/AuthorService";

export class AuthorStore {

    authors: InterfaceAuthor[] = []

    constructor() {
        makeAutoObservable(this)
    }

    setAuthors(authors: InterfaceAuthor[]) {
        this.authors = authors
    }

    async initAutors(){
        const response = await AuthorService.getAll()
        this.setAuthors(response.data)
    }
}