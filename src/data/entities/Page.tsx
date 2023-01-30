export interface InterfacePage<T> {

    content: T[];

    isFirst: boolean;
    isLast: boolean;
    isEmpty: boolean;

    totalElements: number;
    totalPages: number;
    size: number;
    number: number;
}