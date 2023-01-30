import React from 'react';
import "./styles.css"
import BlogCards from "./BlogCards";
import BlogPagination from "./BlogPagination";

const BlogLanding = () => {
    return (
        <div id={'blogsLandingWrapper'} className={'blogLandingWrapper'}>
            <div className={'container'}>
                <div className={'blogLandingHeader'}>
                    <div className={'blogLandingHeaderTitle'} children={'Блоги'}/>
                </div>
                <BlogCards/>
                <BlogPagination/>
            </div>
        </div>
    );
};

export default BlogLanding;