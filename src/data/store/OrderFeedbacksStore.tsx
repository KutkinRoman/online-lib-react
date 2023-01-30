import {PageStore} from "./PageStore";
import {InterfaceOrderFeedback} from "../entities/OrderFeedback";
import {makeObservable} from "mobx";
import {OrderFeedbackService} from "../services/OrderFeedbackService";

export class OrderFeedbacksStore extends PageStore<InterfaceOrderFeedback> {

    static DEFAULT_PAGE_SIZE = 3

    constructor() {
        super();
        makeObservable(this, {})
    }

    async initStartPage() {
        await this.initPage(0, OrderFeedbacksStore.DEFAULT_PAGE_SIZE)
    }

    async initPrevPage() {
        await this.initPage(this.number - 1,  OrderFeedbacksStore.DEFAULT_PAGE_SIZE)
    }

    async initNextPage() {
        await this.initPage(this.number + 1,  OrderFeedbacksStore.DEFAULT_PAGE_SIZE)
    }

    async initPage(page: number, size: number) {
        try {
            this.isLoading = true
            const response = await OrderFeedbackService.getPageByParams({
                page: page,
                size: size
            })
            this.setContent(response.data.content)
            this.updateParams(response.data)
        } catch (e) {
            console.error(e)
        } finally {
            this.isLoading = false
        }
    }

}