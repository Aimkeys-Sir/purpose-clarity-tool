import React,{  Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Home=()=>{
    // if (!isLoggedIn) return <Navigate to="/login" />;
    return (
        <div style={{backgroundColor:"aliceblue"}}>
          <h1>Put a descriptionn about the site</h1>
          <Link to="/form">
        <button class="btn btn-secondary">Go to Form</button>
      </Link>
          
        </div>
      )
}

export default Home;