import React, {useEffect, useState} from 'react';
import {InterfaceAuthor} from "../../data/entities/Author";
import AdminPanelPage from "./index";
import {Divider} from "@mui/material";
import EntityTable from "../../components/table/entity";
import {BookService} from "../../data/services/BookService";

const BooksPageAdmin = () => {
    const [data, setData] = useState<InterfaceAuthor[]>([])

    useEffect(() => {
        const initData = async () => {
            const response = await BookService.getAll();
            setData(response.data)
        }
        initData()
    }, [])

    return (
        <AdminPanelPage>
            <h3>Books</h3>
            <Divider/>
            <EntityTable data={data} editLink={'/admin-panel/book-edit'}/>
        </AdminPanelPage>
    );
};

export default BooksPageAdmin;