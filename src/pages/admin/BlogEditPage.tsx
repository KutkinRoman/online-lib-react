import React from 'react';
import AdminPanelPage from "./index";
import {useParams} from "react-router-dom";

const BlogEditPage = () => {
    const {postId} = useParams();

    return (
        <AdminPanelPage>
            <div>BlogEditPage postId: {postId}</div>
        </AdminPanelPage>
    );
};

export default BlogEditPage;