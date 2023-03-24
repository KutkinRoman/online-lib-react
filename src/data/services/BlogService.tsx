import {API} from "../APICofig";
import {InterfacePage} from "../entities/Page";
import {InterfaceBlog} from "../entities/Blog";
import {InterfaceFile} from "../entities/File";

export class BlogService {

    static async getFormById(id: string) {
        return await API.get <InterfaceBlog>(`/blogs/form/${id}`)
    }

    static async saveForm(data: string) {
        return await API.post <InterfaceBlog>(`/blogs/save/`, data)
    }


    static async getAll(params?: any) {
        return await API.get <InterfaceBlog[]>('/blogs/getAll', {params})
    }

    static async getPageByParams(params?: any) {
        return await API.get <InterfacePage<InterfaceBlog>>('/blogs/pages', {params})
    }


    static async downloadImage(blogId: string) {
        return API.get<InterfaceFile>(`/blogs/images/${blogId}`)
    }

    static async uploadImage(blogId: string, data: FormData) {
        return API.post<InterfaceFile>(`/blogs/images/${blogId}`, data)
    }
}