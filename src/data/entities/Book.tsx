import {InterfaceBookCategory} from "./BookCategory";
import {InterfaceAuthor} from "./Author";

export interface InterfaceBook {

    id: string;

    name: string;

    description: string;

    coverLink: string;

    price: number;

    rating: number;

    ratingCount: number;

    categories: InterfaceBookCategory[]

    authors: InterfaceAuthor[]
}