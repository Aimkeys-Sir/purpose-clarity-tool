import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
const Login = ({ setToken }) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    console.log(formData)
    fetch("http://localhost:4000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setToken(data.token)
          navigate("/")
        })
      }else{
        console.log(r)
      }
    })

    // after logging the user in, redirect to the home page!
  }

  return (
    <form style={{ backgroundColor: "aliceblue" }} onSubmit={handleSubmit}>
      <h1>Login</h1>

      {/* <div class="col-md-6" style={{width:"700px"}}>
    <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
  </div> */}
      <div class="col-md-6 mb-4" style={{ width: "700px" }}>
        <input
          type="text"
          name="email"
          class="form-control"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div class="col-md-6" style={{ width: "700px" }}>
        <input
          type="password"
          name="password"
          class="form-control"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button
        onClick={handleSubmit}
        class="btn btn-secondary mt-4"
        style={{ width: "100px" }}
        type="submit"
      >
        Login
      </button>
    </form>
  )
}

export default Login
