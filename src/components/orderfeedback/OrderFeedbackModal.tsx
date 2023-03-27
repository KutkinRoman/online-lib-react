import React, {useState} from 'react';
import {Rating, Tooltip} from "@mui/material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import FeedbackIcon from '@mui/icons-material/Feedback';
import {InterfaceBook} from "../../data/entities/Book";
import Button from "../form/Button";
import TextArea from "../form/TextArea";
import {OrderFeedbackService} from "../../data/services/OrderFeedbackService";
import {useAlert} from "../../hooks/useAlert";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 550,
    bgcolor: 'background.paper',
    border: '2px solid #fff',
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
};

interface OrderFeedbackModalBook {
    book: InterfaceBook
}

const OrderFeedbackModal = ({book}: OrderFeedbackModalBook) => {
    const [open, setOpen] = React.useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const {successSaved, errorSaved} = useAlert()
    const [feedback, setFeedback] = useState({
        bookId: book.id,
        text: '',
        rating: 0
    })

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const onSubmit = async () => {
        try {
            setIsLoading(true)
            await OrderFeedbackService.save(feedback)
            handleClose()
            successSaved()
        } catch (e) {
            console.log(e)
            errorSaved()
        } finally {
            setIsLoading(false)
        }
    }

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
                    <div className={'formContainer'}>
                        <div className={'formHeaderTitle'}>
                            {book.name}
                        </div>
                        <TextArea
                            rows={12}
                            label={'Отзыв'}
                            value={feedback.text}
                            onChange={event => setFeedback({...feedback, text: event.currentTarget.value})}
                        />
                        <Box paddingTop={'15px'}>
                            <Rating
                                size={'large'}
                                value={feedback.rating}
                                onChange={(event, value) => setFeedback({...feedback, rating: value || 0})}
                            />
                        </Box>
                        <Button
                            type={'submit'}
                            className={'loginSubmitButton'}
                            children={'Сохранить'}
                            onClick={onSubmit}
                            isLoading={isLoading}
                        />
                    </div>
                </Box>
            </Modal>
        </React.Fragment>
    );
};

export default OrderFeedbackModal;