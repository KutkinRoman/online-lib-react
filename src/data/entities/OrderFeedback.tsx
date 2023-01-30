import {InterfaceUserInfo} from "./UserInfo";

export interface InterfaceOrderFeedback {
    id: string;

    text: string;

    rating: number;

    book: {
        id: string;
        coverLink: string;
    }

    user: InterfaceUserInfo;
}