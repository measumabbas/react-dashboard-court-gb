import React from 'react'
import './login.css'
const Login = () => {
  return (
    <div className="container">
        <div className="main-section">
            <div className="text-section">
                <img src="logo1.png" alt=""/>
                <h2>Tourism Departement, <br/>Gilgit Baltistan</h2>
            </div>
            <div className="login-section">
                <img src="Gilgit_Baltistan_Government_Logo.svg.png" alt=""/>
                <h2>LOGIN</h2>
                <form action="">
                    <input type="text" placeholder="Name or Email"/>
                    <input type="password" placeholder="Password"/>
                    <div className="forget-pass">
                        <a href="">Forget Your Password?</a>
                    </div>
                    <div className="log-sec">
                        <input type="button" value="LOGIN"/>
                    </div>
                    <div className="sign-link">
                        <h3>Don't have any account?<a href="">Signup Now</a></h3>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login