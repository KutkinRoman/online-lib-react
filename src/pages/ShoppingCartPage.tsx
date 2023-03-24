import React, {useState} from 'react';
import "./styles.css"
import NavBar from "../components/navbar/NavBar";
import Button from "../components/form/Button";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {observer} from "mobx-react-lite";
import {useAppStore} from "../context/useAppStore";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import {ShoppingCartService} from "../data/services/ShoppingCartService";
import {useAlert} from "../hooks/useAlert";
import {Alert} from "@mui/material";

const ShoppingCartPage = () => {
    const appStore = useAppStore()
    const cart = useAppStore().shoppingCartStore
    const [isLoading, setIsLoading] = useState(false)
    const {enqueueSnackbar} = useAlert()

    const generationPriceString = (value: number) => {
        const string = parseFloat(value.toString())
            .toFixed(2)
            .replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
        return string + ' KZT'
    }

    const removeBook = async (bookid: string) => {
        try {
            setIsLoading(true)
            const response = await ShoppingCartService.removeBook(bookid);
            appStore.setShoppingCartStore(response.data)
        } catch (e){
            console.log(e)
        } finally {
            setIsLoading(false)
        }
    }

    const payment = async () => {
        if (!cart) return;
        try {
            setIsLoading(true)
            await ShoppingCartService.payment(cart.id);
            appStore.setShoppingCartStore(null)
            enqueueSnackbar('Заказ оформлен', {variant: "success"})
        } catch (e){
            console.log(e)
            enqueueSnackbar('Возникла ошибка при оформлении заказа', {variant: "error"})
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className={'wrapper'}>
            <NavBar/>
            <div className={'container'} style={{paddingTop: '50px'}}>
                {(cart && cart.totalOrders)
                 ?
                    <React.Fragment>
                        <TableContainer component={Paper}>
                            <Table sx={{minWidth: 650}} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell/>
                                        <TableCell>
                                            Наименование
                                        </TableCell>
                                        <TableCell>
                                            Дата
                                        </TableCell>
                                        <TableCell>
                                            Стоимость
                                        </TableCell>
                                        <TableCell/>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {cart?.orders.map((order) => (
                                        <TableRow key={order.id}>
                                            <TableCell>
                                                <img
                                                    src={order.book.coverLink}
                                                    alt={order.book.name}
                                                    style={{maxHeight: '100px'}}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                {order.book.name}
                                            </TableCell>
                                            <TableCell>
                                                {order.createdTs}
                                            </TableCell>
                                            <TableCell>
                                                {generationPriceString(order.book.price)}
                                            </TableCell>
                                            <TableCell>
                                                <IconButton
                                                    aria-label="delete"
                                                    size="large"
                                                    onClick={() => removeBook(order.book.id)}
                                                    disabled={isLoading}
                                                >
                                                    <DeleteIcon fontSize="inherit"/>
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        {(cart && cart.totalPrice) &&
                            <Button isLoading={isLoading} onClick={payment}>
                                Оформить заказ на сумму {generationPriceString(cart.totalPrice)}
                            </Button>
                        }
                    </React.Fragment>
                 :
                    <Alert severity={'info'}>
                        Корзина пуста...
                    </Alert>
                }
            </div>
        </div>
    );
};

export default observer(ShoppingCartPage);