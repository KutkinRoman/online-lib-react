import React, {useState} from 'react';
import {Tooltip} from "@mui/material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import FeedbackIcon from '@mui/icons-material/Feedback';
import {InterfaceBook} from "../../data/entities/Book";

interface OrderFeedbackModalBook {
    book: InterfaceBook
}

const OrderFeedbackModal = ({book}: OrderFeedbackModalBook) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [search, setSearch] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        height: 400,
        bgcolor: 'background.paper',
        border: '2px solid #fff',
        borderRadius: 5,
        boxShadow: 24,
        p: 4,
    };

    return (
        <React.Fragment>
            <Tooltip title={'Отзыв'}>
                <FeedbackIcon onClick={handleOpen}/>
            </Tooltip>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>

                </Box>
            </Modal>
        </React.Fragment>
    );
};

export default OrderFeedbackModal;