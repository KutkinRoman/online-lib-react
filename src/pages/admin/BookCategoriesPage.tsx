import React, {useEffect, useState} from 'react';
import AdminPanelPage from "./index";
import {InterfaceBookCategory} from "../../data/entities/BookCategory";
import {BookCategoryService} from "../../data/services/BookCategoryService";
import {Divider} from "@mui/material";
import EntityTable from "../../components/table/entity";

const BookCategoriesPage = () => {
    const [data, setData] = useState<InterfaceBookCategory[]>([])

    useEffect(() => {
        const initData = async () => {
            const response = await BookCategoryService.getAll();
            setData(response.data)
        }
        initData()
    }, [])

    return (
        <AdminPanelPage>
            <h3>Book Categories</h3>
            <Divider/>
            <EntityTable data={data} editLink={'/admin-panel/book-category-edit'}/>
        </AdminPanelPage>
    );
};

export default BookCategoriesPage;