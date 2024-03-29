import React, {useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Link} from "react-router-dom";

interface EntityTableProps {
    data: any[]
    editLink: string;
}

const EntityTable = ({data, editLink}: EntityTableProps) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {data.length > 0 &&
                            <>
                                {Object.keys(data[0]).map(key => <TableCell key={key}>{key}</TableCell>)}
                                <TableCell/>
                            </>
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            {Object.keys(row).map(key => <TableCell key={key}>{row[key]}</TableCell>)}
                            <TableCell>
                                <Link to={`${editLink}/${row.id}`}>
                                    EDIT
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default EntityTable;