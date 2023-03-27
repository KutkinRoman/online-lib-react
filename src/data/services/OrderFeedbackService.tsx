import {API, AUTH_API} from "../APICofig";
import {InterfacePage} from "../entities/Page";
import {InterfaceOrderFeedback} from "../entities/OrderFeedback";

export class OrderFeedbackService {

    static async getAll(params?: any) {
        return await API.get<InterfaceOrderFeedback[]>('/order-feedbacks/getAll', {params})
    }

    static async getPageByParams(params?: any) {
        return await API.get<InterfacePage<InterfaceOrderFeedback>>('/order-feedbacks/pages', {params})
    }

    static async save(data: any) {
        return await AUTH_API.post<any>('/order-feedbacks/save', data)
    }
}