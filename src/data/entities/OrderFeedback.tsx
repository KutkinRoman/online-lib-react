import {InterfaceUserInfo} from "./UserInfo";

export interface InterfaceOrderFeedback {
    id: string;

    text: string;

    rating: number;

    orderBook: {
        id: string;
        coverLink: string;
    }

    orderOwner: InterfaceUserInfo;
}