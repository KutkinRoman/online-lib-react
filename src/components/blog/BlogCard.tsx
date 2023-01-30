import React from 'react';
import {InterfaceBlog} from "../../data/entities/Blog";
import "./styles.css"
import {Grid} from "@mui/material";

interface BlogCardProps {
    blog: InterfaceBlog
}

const BlogCard = ({blog}: BlogCardProps) => {

    const imageStyle = {
        background: "url(\"" + blog.imageLink + "\") no-repeat center"
    }

    return (
        <Grid item xs={12} sm={6} md={3} lg={3}>
            <div className={'blogLandingCard'}>
                <div className={'blogLandingCardImage'} style={imageStyle}/>
                <div className={'blogLandingCardName'} children={blog.name}/>
            </div>
        </Grid>
    );
};

export default BlogCard;