
import React, { useEffect, useState } from "react";
import { Routes ,Route, useNavigate} from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Form from "./components/Form";
import Firststep from "./components/Firststep";
import './App.css';
import Register from "./components/Register";
import { useLocalStorage } from "./components/useLocalStorage";



function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useLocalStorage()
  const [user, setUser] = useState(null)

  const navigate = useNavigate()

  const getMe = ()=>{
    fetch("http://localhost:4000/users/me",{
      headers:{
        Authorization: `Bearer ${token}`
      }
    }).then(r=>{
      if(r.ok){
        r.json().then(user=>{
          setUser(user)
          navigate("/")
        })
      }else{
        console.log(r)
        navigate("/login")
      }
    })
  }

  useEffect(()=>{
    console.log(token)
    getMe()
  },[token])
  return (
    <div className="App">
    {<NavBar setToken={setToken} /> }

      <Routes>
      
      <Route exact path="/navbar" element={<NavBar  setToken={setToken}/>} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/login"   element={<Login setToken={setToken} />} />
      <Route exact path="/form" element={<Form  />} />
      <Route path="/firststep" element={<Firststep />} />
      <Route exact path="/register" element={<Register setToken={setToken}/>} />
      <Route exact path="/" element={<Home/>} />
        </Routes>

        

    </div>
  )
}

export default App;


