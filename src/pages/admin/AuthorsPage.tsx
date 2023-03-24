import React, {useEffect, useState} from 'react';
import AdminPanelPage from "./index";
import {AuthorService} from "../../data/services/AuthorService";
import {InterfaceAuthor} from "../../data/entities/Author";
import {Divider} from "@mui/material";
import EntityTable from "../../components/table/entity";

const AuthorsPage = () => {

    const [data, setData] = useState<InterfaceAuthor[]>([])

    useEffect(() => {
        const initData = async () => {
            const response = await AuthorService.getAll();
            setData(response.data)
        }
        initData()
    }, [])

    return (
        <AdminPanelPage>
            <h3>Authors</h3>
            <Divider/>
            <EntityTable data={data} editLink={'/admin-panel/author-edit'}/>
        </AdminPanelPage>
    );
};

export default AuthorsPage;