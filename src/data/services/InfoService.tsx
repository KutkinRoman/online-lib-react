import {API} from "../APICofig";
import {InterfaceInfo} from "../entities/Info";

export class InfoService {

    static async getInfo() {
        return await API.get<InterfaceInfo>('/echo')
    }
}