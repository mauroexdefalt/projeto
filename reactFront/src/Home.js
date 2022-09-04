import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ApiRoutes } from './ApiRoutes';
import { Auth } from './Authenticate';
import DenseTable from './components/table/index.js';
import './App.css';
import logo from './images/logo.png';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../src/components/themeProvider/themeProvider.js';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import AlertDialog from './components/dialog/index.js';



export default function Home() {


    const [data, setData] = useState([])
    const [openModal,setOpenModal] = useState({open:false,type:'insert',data:{}})


    useEffect(() => {
        Auth();
        getCloath();
    }, [])


    function CloseModal(){
        setOpenModal({...openModal,open:false});
    }



    function UpdateTable(){
        getCloath();        
    }









    function getCloath() {

        let reqInstance = axios.create({
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        reqInstance.get(ApiRoutes.cloath)
            .then((e) => {
                console.log(e.data);
                if (e.data) {
                    setData(e.data);
                }
            }).catch((err) => {

            })
    }




    return (

        <div className='Home'>
            <img src={logo} width='300px' style={{ marginBottom: '100px' }} />
            <div className='ContainerTable'>
                <div style={{display:'flex' ,justifyContent:'flex-end'}}>
                <ThemeProvider theme={theme}>
                    <Button onClick={()=>{setOpenModal({open:true, type:'insert'})}} style={{ margin: ' 0px 15px 15px 0px' }} variant="contained" ><AddIcon /></Button>
                </ThemeProvider>
                </div>
                <DenseTable
                    data={data}
                    updateTable={UpdateTable}
                />
                 <AlertDialog open={openModal} CloseModal={CloseModal} updateTable={UpdateTable}/>
            </div>
        </div>

    )
}