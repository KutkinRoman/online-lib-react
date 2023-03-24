import React from 'react';
import {useParams} from "react-router-dom";
import AdminPanelPage from "./index";

const AuthorsEditPage = () => {
    const {authorId} = useParams();

    return (
        <AdminPanelPage>
            <div>AuthorsEditPage authorId: {authorId}</div>
        </AdminPanelPage>
    );
};

export default AuthorsEditPage;