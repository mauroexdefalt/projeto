import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ApiRoutes } from './ApiRoutes';
import {Auth} from './Authenticate';
import DenseTable from './components/table/index.js';
import './App.css';
import logo from './images/logo.png';


export default function Home() {


    const [data,setData] = useState([])


    useEffect(()=>{
        Auth();
        getCloath();
    },[])

   

    
   



    function getCloath() {

        let reqInstance = axios.create({
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        reqInstance.get(ApiRoutes.cloath)
        .then((e) => {
            console.log(e.data);      
            if(e.data){
                setData(e.data);
            }      
        }).catch((err) => {            

        })
    }




    return (
        
            <div className='Home'>
                <img src={logo} width='300px' style={{ marginBottom: '100px' }} />
                <DenseTable
                data={data}                
                />
            </div>
        
    )
}