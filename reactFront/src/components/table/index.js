import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function DenseTable({ data }) {


    const [headers, setHeaders] = React.useState([]);
    const [rows, setRows] = React.useState([]);



    console.log('dentro da tabela', data);


    useEffect(() => {

        if (data.length > 0) {
            console.log('dentro do if', data[0]);
            setHeaders(Object.keys(data[0]));
            setRows(data)
        }





    }, [data])



    console.log('headers', headers);


    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        {headers.map((header) => {
                            return <TableCell align="left">{header}</TableCell>
                        })}
                        <TableCell align="left">Acoes</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id_clothe}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="left">{row.id_clothe}</TableCell>
                            <TableCell align="left">{row.title}</TableCell>
                            <TableCell align="left">{row.size}</TableCell>
                            <TableCell align="left">{row.state}</TableCell>
                            <TableCell align="left">{row.brand}</TableCell>
                            <TableCell align="left">{row.create_at}</TableCell>
                            <TableCell align="left">acoes</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
