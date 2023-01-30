import {API} from "../APICofig";
import {InterfacePage} from "../entities/Page";
import {InterfaceBlog} from "../entities/Blog";

export class BlogService {

    static async getPageByParams(params?: any) {
        return await API.get <InterfacePage<InterfaceBlog>>('/blogs/pages', {params})
    }
}