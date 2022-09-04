import React, { useEffect, useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import logo from './images/logo.png';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ApiRoutes } from './ApiRoutes';
import axios from 'axios';
import CircularIndeterminate from './components/load/index.js';
import BasicAlerts from './components/alert/index.js';
import { useNavigate  } from 'react-router-dom';
import { theme } from '../src/components/themeProvider/themeProvider.js';



function App() {
  let navigate = useNavigate();

  const [load, setLoad] = useState(false);
  const [data, setData] = useState({
    username: 'mauro',
    password: '123123',
  });
  const [error, setError] = useState(false);


  function login() {
    setLoad(true);
    setError(false)
    axios.post(ApiRoutes.token, { ...data }).then((e) => {
      
      if (e.data.access) {
        localStorage.setItem('token', e.data.access);
        localStorage.setItem('refresh', e.data.refresh);
        navigate('/home')
        setLoad(false);
      }
    }).catch((err) => {
      console.log(err);
      setLoad(false);
      setError(true)
    });
  }

  function handleData(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
    console.log(data)
  }

  return (
    <div className='Container'>
      <img src={logo} width='300px' style={{ marginBottom: '100px' }} />
      <div className='login'>
        {load ? <ThemeProvider theme={theme}> <CircularIndeterminate /></ThemeProvider> :
          <ThemeProvider theme={theme}>
            <TextField id="outlined-basic"
              label="Login"
              size='small'
              variant="outlined"
              name='username'
              value={data.username}
              onChange={(e) =>handleData(e)} />
            <TextField id="outlined-basic"
              label="Password"
              variant="outlined"
              name='password'
              value={data.password}
              onChange={(e) =>handleData(e)}
              name='password'
              type='password'
              size='small' />
            <Button variant="contained" size='small' onClick={() => login()} style={{ width: '223px' }}>Login</Button>

            
          </ThemeProvider>
        }


        {error ? <BasicAlerts style={{ width: '223px' }} /> : null}


      </div>
    </div>




  );
}

export default App;
