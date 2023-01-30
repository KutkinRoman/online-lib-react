import {API} from "../APICofig";
import {InterfacePage} from "../entities/Page";
import {InterfaceOrderFeedback} from "../entities/OrderFeedback";

export class OrderFeedbackService {

    static async getPageByParams(params?: any) {
        return await API.get<InterfacePage<InterfaceOrderFeedback>>('/order-feedbacks/pages', {params})
    }
}