import React, {useEffect} from 'react';
import {useAppStore} from "../../context/useAppStore";
import "./styles.css"
import BlogCard from "./BlogCard";
import {Grid} from "@mui/material";
import {observer} from "mobx-react-lite";

const BlogCards = () => {
    const store = useAppStore().blogsStore;

    useEffect(() => {
        store.initStartPage()
    }, [])

    return (
        <div className={'blogLandingCards'}>
            <Grid container spacing={2} flex={1}>
                {store.content.map(blog => {
                    return (
                        <BlogCard
                            key={blog.id}
                            blog={blog}
                        />
                    )
                })}
            </Grid>
        </div>
    );
};

export default observer(BlogCards);