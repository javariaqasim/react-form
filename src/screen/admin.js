import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import {BrowserRouter as Router,Route,Routes,Link} from
//    "react-router-dom";
import Drawer from '../components/drawer'
import { checkUser, getData } from "../config/firebasemethods";
import MainLyout from "./admin screen/mainlyout";

import loaderImg from "../assets/loader.gif";





function Admin(){

    const navigate = useNavigate();
const [loader, setLoader] = useState(false);

    // let [show,setShow] = useState(false);
    // const navigate = useNavigate


    // useEffect(()=>{
    //     checkUser()
    //     .then((userId)=>{
    //         getData("users",userId)
    //         .then((success)=>{
    //             if (success.category=="admin"){
    //                 setShow(true)
    //             }else{
    //                 navigate('/login')
    //             }
    //         })
    //         .catch((error)=>{
    //             console.log(error)
    //             navigate('/login')
    //         })
    //     })
    //     .catch((error)=>{
    //         navigate('/login')
    //     })
    // },[])


    let checkAuth = () => {
        setLoader(true);
        checkUser()
          .then(() => {
            setLoader(false);
          })
          .catch((err) => {
            setLoader(false);
            navigate("/login");
          });
      };
    
      useEffect(() => {
        checkAuth();
      }, []);

    return loader ? (
        <img src={loaderImg} />
      ) : (
        <>
{/* 
   <Drawer /> */}
   <MainLyout />

  

    
        </>
    )
}
export default Admin

