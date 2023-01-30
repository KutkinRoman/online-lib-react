import React from 'react';
import PaginationArrows from "../pagepagination/PaginationArrows";
import {observer} from "mobx-react-lite";
import {useAppStore} from "../../context/useAppStore";
import "./styles.css"

const BlogPagination = () => {
    const store = useAppStore().blogsStore

    return (
        <div className={'blogLandingPaginationWrapper'}>
            <PaginationArrows
                className={'blogLandingPagination'}
                isLoading={store.isLoading}
                onPrev={() => store.initPrevPage()}
                onNext={() => store.initNextPage()}
                isNextDisable={store.isLast}
                isPrevDisable={store.isFirst}
            />
        </div>
    );
};

export default observer(BlogPagination);