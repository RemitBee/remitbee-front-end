import { Link } from "react-router-dom/cjs/react-router-dom.min";
import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import Axios from 'axios';
import Swal from 'sweetalert2'
import Navigation from "./Navigation";

function ForgetPassword(){

    const [data,setData] = useState({
        adminEmail:'',
        forgetPassword:''
    });

    const handleInput = (e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const history = useHistory();

    const resetPassword = async()=>{
        try{
            const credentials = {
                email:data.adminEmail,
                password:data.forgetPassword
            };

            console.log(credentials);

            const response = await Axios.get(`http://localhost:8000/api/readers`,{params: credentials});

            if (response.status===200){
                Swal.fire({
                    title: 'Success',
                    text: `${response.data.message}`,
                    icon: 'success',
                    confirmButtonText: 'Ok'
                });
                history.push('/reader/home'); //Todo
            }

        }catch(error){
            console.log(error);
            if (error.response.status===404){
                Swal.fire({
                    title: 'Not found!',
                    text: `${error.response.data.message}`,
                    icon: 'question',
                    confirmButtonText: 'Ok'
                });
            }else if (error.response.status===401){
                Swal.fire({
                    title: 'Invalid!',
                    text: `${error.response.data.message}`,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
            }

        }
    }

    return (
      

              <div className="col-md-6 pt-5">
              <div className="d-flex justify-content-center align-items-center">
                <div class="card w-75 mb-3 border-5">
                    <div class="card-body p-5">
                        <h5 class="card-title text-center fw-bold">Change Password</h5>

                        <label>Email</label>
                        <input type="textEmail" className="form-control mb-2" name="email" value={data.email} onChange={handleInput}></input>

                        <div className="d-flex justify-content-center align-items-center mb-3">
                            <button type="button" class="btn btn-primary" onClick={resetPassword}>Send OTP</button>
                        </div>
                    </div>
                </div>
                </div>

              </div>
    );
}

export default ForgetPassword;