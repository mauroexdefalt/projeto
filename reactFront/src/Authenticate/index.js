
import axios from "axios";
import { ApiRoutes } from "../ApiRoutes";

export  function Auth() {
  
        let reqInstance = axios.create({
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });

        reqInstance.post(ApiRoutes.refresh, { refresh: localStorage.getItem('refresh') })
        .then((e) => {
            localStorage.setItem('token', e.data.access);  
        }).catch((err) => {
            window.location.href = "/";

        })

 

   
}