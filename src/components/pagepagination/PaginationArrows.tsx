import React from 'react';
import {CircularProgress, IconButton} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface PaginationArrows extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

    isLoading?: boolean;
    isPrevDisable?: boolean;
    isNextDisable?: boolean;

    onPrev: () => void;
    onNext: () => void;
}

const PaginationArrows = ({isLoading, isPrevDisable, isNextDisable, onPrev, onNext, ...props}: PaginationArrows) => {
    return (
        <div {...props}>
            {isLoading
                ? <CircularProgress color={'primary'} size={25}/>
                : <React.Fragment>
                    <IconButton color="primary" aria-label="upload picture" component="label"
                                onClick={onPrev}
                                disabled={isPrevDisable}>
                        <ChevronLeftIcon/>
                    </IconButton>
                    <IconButton color="primary" aria-label="upload picture" component="label"
                                onClick={onNext}
                                disabled={isNextDisable}>
                        <ChevronRightIcon/>
                    </IconButton>
                </React.Fragment>
            }
        </div>
    );
};

export default PaginationArrows;