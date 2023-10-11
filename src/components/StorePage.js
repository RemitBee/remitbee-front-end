import React, {useState} from 'react';
import '../css/StorePage.css'
import {ValidationAdminRegistration} from "../common/Validation";
import Axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function AdminRegister(props) {
    const [data,setData] = useState({
        shopName:'',
        shopAddress:'',
        shopTown:'',
        shopLocationUrl:'',
        currencyTypes:'',
        currencyRate:''
    });

    const [selectedCurrency, setSelectedCurrency] = useState('USD');
    const [errors,setErrors] = useState({});

    const handleInput = (e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    function handleValidation(e){
        setErrors(ValidationAdminRegistration(data))
    }

    const valid = errors.valid;
    // console.log(errors.valid);

    const saveData = async()=>{
        try{
            const adminShopData = {
                name:data.shopName,
                address:data.shopAddress,
                town:data.shopTown,
                locationUrl:data.shopLocationUrl,
                currency:data.currencyTypes,
                rate:data.currencyRate
            };

            handleValidation();

            const response = await Axios.post('http://localhost:8000/api/admin',adminShopData);

            if (response.status===201){
                Swal.fire({
                    title: 'Success!',
                    text: 'Registration Successfull!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                });
            }else{
                console.error('Error:',response.data.message)
            }


        }catch (error){
            console.log('Error',error.message);
            if (error.response.status===422){
                Swal.fire({
                    title: 'Error!',
                    text: 'Invalid input. please insert correct data',
                    icon: 'question',
                    confirmButtonText: 'Ok'
                });
            }else{
                Swal.fire({
                    title: 'Error!',
                    text: `${error.response.data.message}`,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
            }
        }
    };


    return (
        <div className="col-md-6 pt-1">
            <div className="d-flex justify-content-center align-items-center">
                <div className="card w-75 mb-3 border-5">
                    <div className="card-body p-5">
                        <h1 className="card-title text-center fw-bold" style={{ fontWeight: 'bold', color: 'blue' }}>Add Store Details</h1>
                        <label>Shop Name</label>
                        <input id="txtName" type="text" className="form-control mb-2" name="name" value={data.shopName}
                               onChange={handleInput}></input>
                        {errors.name && <p className="small-font" style={{color: "red"}}>{errors.shopName}</p>}

                        <label>Address</label>
                        <input id="txtEmployeeNumber" type="text" className="form-control mb-2" name="address"
                               value={data.shopAddress} onChange={handleInput}></input>
                        {errors.name && <p className="small-font" style={{color: "red"}}>{errors.shopAddress}</p>}

                        <label>Town </label>
                        <input id="txtTown" type="text" className="form-control mb-2" name="town" value={data.shopTown}
                               onChange={handleInput}></input>
                        {errors.name && <p className="small-font" style={{color: "red"}}>{errors.shopTown}</p>}

                        <label>Select Location</label>
                        <input id="txtEmail" type="text" className="form-control mb-2" name="location" value={data.shopLocationUrl}
                               onChange={handleInput}></input>
                        {errors.name && <p className="small-font" style={{color: "red"}}>{errors.shopLocationUrl}</p>}


                        <div>
                            {/*<label>Currency</label>
                            <input id="txtPassword" type="password" className="form-control mb-2" name="password"
                                   value={data.password} onChange={handleInput}></input>
                            {errors.name && <p className="small-font" style={{color: "red"}}>{errors.password}</p>}*/}

                            <div className="currency-converter" >
                                <div><label>Select Currency:</label></div>
                                <div>
                                    <select
                                        value={data.currencyTypes}
                                        onChange={(e) => setSelectedCurrency(e.target.value)}
                                    >
                                        <option value="USD">USD</option>
                                        <option value="EUR">EUR</option>
                                        <option value="GBP">GBP</option>
                                    </select>
                                </div>
                            </div>

                       </div>

                        <label>Rate</label>
                        <input id="number" type="number" className="form-control mb-2"
                               name="confirmPassword" value={data.currencyRate} onChange={handleInput}></input>
                        {errors.name && <p className="small-font" style={{color: "red"}}>{errors.currencyRate}</p>}

                        <div className="d-flex justify-content-center align-items-center mb-3">
                            <a href="#" onClick={saveData} className="btn btn-primary">Submit</a>
                        </div>
                        <label>Already have an account?<Link to='/reader/signin' className="ms-2">Sign in</Link></label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminRegister;