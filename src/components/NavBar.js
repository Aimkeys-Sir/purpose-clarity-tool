import React from "react";
import { NavLink, useNavigate } from "react-router-dom";



const linkStyles = {
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "grey",
    textDecoration: "none",
    color: "white",
  };
  
const NavBar=({ setToken })=>{
    const navigate = useNavigate();

    function handleLogout() {
      setToken("")
      navigate('/login');
    }
    return (
        <div  class="shadow p-3 mb-5 bg-white rounded"
        style={{display:"flex",
        marginLeft:"90rem",
        gap:"10px"
        }}>
          <NavLink
            to="/"
            /* set exact so it knows to only set activeStyle when route is deeply equal to link */
            exact
            /* add styling to Navlink */
            style={linkStyles}
            /* add prop for activeStyle */
            activeStyle={{
              background: "darkblue",
            }}
          >
            Home
          </NavLink>
         
          <NavLink
            to="/register"
            exact
            style={linkStyles}
            activeStyle={{
              background: "darkblue",
            }}
          >
            Register
          </NavLink>
          <NavLink
            to="/login"
            exact
            style={linkStyles}
            activeStyle={{
              background: "grey",
            }}
          >
           Login
          </NavLink>


          <button  class="btn btn-secondary" onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default NavBar;