import React, {useEffect, useState} from 'react';
import AdminPanelPage from "./index";
import {InterfaceBlog} from "../../data/entities/Blog";
import {BlogService} from "../../data/services/BlogService";
import {Divider} from "@mui/material";
import EntityTable from "../../components/table/entity";

const BlogsPage = () => {

    const [data, setData] = useState<InterfaceBlog[]>([])

    useEffect(() => {
        const initData = async () => {
            const response = await BlogService.getAll();
            setData(response.data)
        }
        initData()
    }, [])

    return (
        <AdminPanelPage>
            <h3>BlogsPage</h3>
            <Divider/>
            <EntityTable data={data} editLink={'/admin-panel/blog-edit'}/>
        </AdminPanelPage>
    );
};

export default BlogsPage;