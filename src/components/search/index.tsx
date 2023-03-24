import React, {useState} from 'react';
import {CircularProgress, Divider, Stack, TextField, Tooltip, Typography} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {InterfaceBook} from "../../data/entities/Book";
import {BookService} from "../../data/services/BookService";
import {Link} from "react-router-dom";

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

const MultiSearch = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [data, setData] = useState<InterfaceBook[]>([])
    const [search, setSearch] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const onChangeSearchHandler = async (event: any) => {
        const value = event.target.value;
        setSearch(value)
        if (value) {
            try {
                setIsLoading(true)
                const response = await BookService.search(value)
                setData(response.data)
            } catch (e) {
                console.error(e)
            } finally {
                setIsLoading(false)
            }
        } else {
            setData([])
        }
    }

    return (
        <React.Fragment>
            <Tooltip title={'Поиск'}>
                <SearchIcon
                    fontSize={'large'}
                    sx={{color: '#fff'}}
                    onClick={handleOpen}
                />
            </Tooltip>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Stack spacing={2}>
                        <TextField
                            id="standard-basic"
                            label="Поиск"
                            variant="standard"
                            fullWidth
                            value={search}
                            onChange={onChangeSearchHandler}
                            focused
                        />
                        {isLoading
                            ?
                            <CircularProgress color={'primary'} size={25}/>
                            :
                            <React.Fragment>
                                {data.map(item => {
                                    return (
                                        <Stack spacing={1} key={item.id}>
                                            <Stack spacing={1} flexDirection={'row'}>
                                                <img
                                                    src={item.coverLink}
                                                    alt={item.name}
                                                    style={{borderRadius: '15px', height: '100px', padding: '5px'}}
                                                />
                                                <Stack>
                                                    <Typography variant={'subtitle1'}>
                                                        <Link to={`/books/${item.id}`}>
                                                            {item.name}
                                                        </Link>
                                                    </Typography>
                                                    <Typography variant={'caption'}>
                                                        {item.description}
                                                    </Typography>
                                                </Stack>
                                                <Stack>
                                                </Stack>
                                            </Stack>
                                            <Divider/>
                                        </Stack>
                                    )
                                })}
                            </React.Fragment>
                        }
                    </Stack>
                </Box>
            </Modal>
        </React.Fragment>
    );
};

export default MultiSearch;