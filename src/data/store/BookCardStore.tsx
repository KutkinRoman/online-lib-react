import {InterfaceBook} from "../entities/Book";
import {InterfaceAuthor} from "../entities/Author";
import {InterfaceBookCategory} from "../entities/BookCategory";
import {makeAutoObservable} from "mobx";

export class BookCardStore implements InterfaceBook {

    authors: InterfaceAuthor[];
    categories: InterfaceBookCategory[];
    coverLink: string;
    description: string;
    id: string;
    name: string;
    price: number;
    rating: number;
    ratingCount: number;

    isFavourite: boolean;

    constructor(b: InterfaceBook) {
        this.authors = b.authors;
        this.categories = b.categories;
        this.coverLink = b.coverLink;
        this.description = b.description;
        this.id = b.id;
        this.name = b.name;
        this.price = b.price;
        this.rating = b.rating;
        this.ratingCount = b.ratingCount;
        this.isFavourite = b.isFavourite;
        makeAutoObservable(this, {})
    }

    setIsFavourite(isFavourite: boolean) {
        this.isFavourite = isFavourite;
    }

    static create(b: InterfaceBook) : BookCardStore{
        return  new BookCardStore(b)
    }
}