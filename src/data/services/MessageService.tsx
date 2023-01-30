import {API} from "../APICofig";

export class MessageService {

    static async sendUserMessage(data: any) {
        await API.post('/messages/send-user-message', data)
    }
}