import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import AlertDialog from '../dialog';
import DeleteIcon from '@mui/icons-material/Delete';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { theme } from '../themeProvider/themeProvider';


export default function DenseTable({ data , updateTable  }) { 

    const [headers, setHeaders] = React.useState([]);
    const [rows, setRows] = React.useState([]);
    const [openModal,setOpenModal] = useState({open:false,type:'',data:{}})


    const HeaderTitle = {

        id_clothe: 'ID',
        title: 'Título',	
        size: 'Tamanho',	
        state: 'Estado',	
        brand: 'Marca',
        create_at: 'Data de criação',	

    }



    function Edit(id){
        const data = rows.filter((item)=> item.id_clothe === id)        
        setOpenModal({open:true,type:'edit',data:data[0]})
    }


    function Delete(id){
        const data = rows.filter((item)=> item.id_clothe === id)      
        setOpenModal({open:true,type:'delete',data:data[0]})
    }


  


  


    useEffect(() => {

        if (data.length > 0) {
            console.log('dentro do if', data[0]);
            setHeaders(Object.keys(data[0]));
            setRows(data)
        }

    }, [data])


    function OpenModal(){
        setOpenModal(true);
    }

    function CloseModal(){
        setOpenModal({...openModal,open:false});
    }



    console.log('headers', headers);


    return (
        <TableContainer component={Paper}>
             
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        {headers.map((header) => {
                            return <TableCell key={header} align="left" style={{fontWeight:'bold'}}>{HeaderTitle[header]}</TableCell>
                        })}
                        <TableCell align="left" style={{fontWeight:'bold'}}>Ações</TableCell>

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
                            <TableCell align="left">
                                <ThemeProvider  theme={theme}>
                                    <Button onClick={()=>{Edit(row.id_clothe)}} style={{margin:'2px'}} variant="contained" ><EditIcon/></Button>
                                    <Button onClick={()=>{Delete(row.id_clothe)}} style={{margin:'2px'}} variant="contained" ><DeleteIcon/></Button>
                                </ThemeProvider>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <AlertDialog open={openModal} CloseModal={CloseModal} updateTable={updateTable}/>
        </TableContainer>
    );
}
