import React from 'react';
import {useParams} from "react-router-dom";
import AdminPanelPage from "./index";

const BookCategoryEditPage = () => {
    const {categoryId} = useParams();

    return (
        <AdminPanelPage>
            <div>BookCategoryEditPage categoryId: {categoryId}</div>
        </AdminPanelPage>
    );
};

export default BookCategoryEditPage;