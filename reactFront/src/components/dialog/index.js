import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
import logo from '../../images/logo.png';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { theme } from '../themeProvider/themeProvider.js';
import axios from 'axios';
import { ApiRoutes } from '../../ApiRoutes';

export default function AlertDialog({ open, CloseModal, updateTable }) {

  const initialState = {
    id_clothe: '',
    title: '',
    size: '',
    state: '',
    brand: ''
  }

  const [form, setForm] = React.useState({ ...initialState })

  React.useEffect(() => {
    if (open.type === 'edit' || open.type === 'delete') {
      setForm({ ...open.data })
    } else {
      setForm({ ...initialState })
    }


  }, [open.open])


  const handleChangeForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }



  const sendInsertRequest = () => {
    console.log('enviando', form);
    let reqInstance = axios.create({
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
    reqInstance.post(ApiRoutes.cloath, form)
      .then((e) => {
        updateTable();
        CloseModal();
        console.log(e.data);
      }).catch((err) => {
        console.log(err);
      })
  }


  const sendPutRequest = () => {
    console.log('enviando', form);
    let reqInstance = axios.create({
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
    reqInstance.put(ApiRoutes.cloath, form)
      .then((e) => {
        updateTable();
        CloseModal();
        console.log(e.data);
      }).catch((err) => {
        console.log(err);
      })
  }


  const sendDeleteRequest = () => {


    axios.delete(ApiRoutes.cloath, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      data: {
        id_clothe: form.id_clothe
      }
    }).then((e) => {
      updateTable();
      CloseModal();


      console.log({ id_clothe: form.id_clothe }, e)

    }).catch((err) => {

      console.log(err)

    })

    console.log('enviando', form);
  }


  const sendRequest = () => {
    const send = {
      edit: () => { sendPutRequest() },
      delete: () => { sendDeleteRequest() },
      insert: () => { sendInsertRequest() }
    }
    send[open.type]();

  }







  return (
    <div style={{ width: '500px' }}>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={open.open}
        onClose={CloseModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"

      >
        <ThemeProvider theme={theme}>
          <DialogTitle id="alert-dialog-title">
            <img src={logo} height={'20px'} width='50px' />
            <div>
              {open.type === 'edit' && "Editar dados do produto"}
              {open.type === 'insert' && "Inserir novo produto"}
              {open.type === 'delete' && "Tem certeza que deseja excluir o produto?"}

            </div>
          </DialogTitle>

          {open.type === 'delete' &&
            <DialogTitle id="alert-dialog-title">

              <div style={{ color: 'red' }}>
                {form.id_clothe}
              </div>
            </DialogTitle>
          }




          {open.type !== 'delete' ?
            <DialogContent style={{
              display: 'flex',
              flexDirection: 'column',
              height: '300px', justifyContent: 'space-around'
            }}>


              <TextField id="outlined-basic"
                label="Titulo"
                size='small'
                variant="outlined"
                name='title'
                value={form.title}
                onChange={handleChangeForm}
                error={form.title === '' ? true : false}
                helperText={form.title === '' ? 'Campo obrigatório' : false}

              />
              <TextField id="outlined-basic"
                label="Tamanho"
                size='small'
                variant="outlined"
                name='size'
                value={form.size}
                onChange={handleChangeForm}
                error={form.size === '' ? true : false}
                helperText={form.size === '' ? 'Campo obrigatório' : false}
              />
              <TextField id="outlined-basic"
                label="Estado"
                size='small'
                variant="outlined"
                name='state'
                value={form.state}
                onChange={handleChangeForm}
                error={form.state === '' ? true : false}
                helperText={form.state === '' ? 'Campo obrigatório' : false}
              />
              <TextField id="outlined-basic"
                label="Marca"
                size='small'
                variant="outlined"
                name='brand'
                value={form.brand}
                onChange={handleChangeForm}
                error={form.brand === '' ? true : false}
                helperText={form.brand === '' ? 'Campo obrigatório' : false}
              />


            </DialogContent>
            : ''}
          <DialogActions>
            <Button onClick={CloseModal}>Cancelar</Button>
            <Button onClick={sendRequest} autoFocus>
              Confirmar
            </Button>
          </DialogActions>
        </ThemeProvider>
      </Dialog>
    </div>
  );
}
