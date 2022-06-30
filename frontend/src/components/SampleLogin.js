import { Box, Typography, TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import axios from "axios";
import { useDispatch } from "react-redux";
import { authactions } from "../store/index"
import { useNavigate } from 'react-router-dom';


const Auth = () => {
  const [isSignup, setisSignup] = useState(false)
  const [Inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  
  const handleChange = (e) => {
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }
  
    const sendRequest = async (type="login")=>{
      const res = axios.post(`http://localhost:5000/api/user/${type}`,{
        name: Inputs.name,
        email : Inputs.email,
        password : Inputs.password 
      })
      .catch((err)=>console.log(err));

      const data = await res.data;
      console.log(data);
      return data;
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(Inputs);
      if(isSignup)
      {
        sendRequest("signup")
        .then((data) => localStorage.setItem("userId", data.user._id))
        .then(() => dispath(authActions.login()))
        .then(() => naviagte("/blogs"));
    } else {
      sendRequest()
        .then((data) => localStorage.setItem("userId", data.user._id))
        .then(() => dispath(authActions.login()))
        .then(() => naviagte("/blogs"));
          
          
      }
    }

  
  return(
    <div>
      <form onSubmit={handleSubmit} >
        <Box
          maxWidth={600}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin={"auto"}
          marginTop={5} 
          color={"sandybrown"}
          
        >
          <Typography variant="h3" padding={3} textAlign={"center"}> {isSignup ? "Signup" : "Login"} </Typography>
          {isSignup && <TextField onChange={handleChange} name="name" value={Inputs.name} id="outlined-basic" label="Name" variant="outlined" margin='normal' />}
          <TextField onChange={handleChange} name="email" value={Inputs.email} id="outlined-basic" type={'email'} label="Email" variant="outlined" margin='normal' />
          <TextField onChange={handleChange} name="password" value={Inputs.password} id="outlined-basic" type={"password"} label="Password" variant="outlined" margin='normal' />

          <Button variant="contained" color={"secondary"} margin='normal' sx={{marginTop:3}}  type={"submit"}>{isSignup ? "Signup" : "Login"}</Button>
          <Button sx={{marginTop:3}} onClick={()=>setisSignup(!isSignup)}> {isSignup ? "already there ? Login" : "new user ? Signup"} </Button>
        </Box>
      </form>
    </div>
  )
    
}

export default Auth


