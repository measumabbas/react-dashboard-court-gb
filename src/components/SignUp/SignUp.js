import React from 'react'

const SignUp = () => {
  return (
    <div className="container">
        <div className="main-section">
            <div className="text-section">
                <div className="head-sec">
                    <img src="logo1.png" alt=""/>
                    <h2>Tourism Departement, <br/>Gilgit Baltistan</h2>
                </div>
            </div>
            <div className="main-log">
                <div className="login-section">
                    <div className="log-section">
                        <img src="Gilgit_Baltistan_Government_Logo.svg.png" alt=""/>
                        <h2>Registration <br/>Form</h2>
                    </div>
                    <div className="from-sec">
                        <form action="">
                            <input type="text" placeholder="Name"/>
                            <input type="email" placeholder="Email"/>
                            <br/>
                            <input type="text" placeholder="Phone Number"/>
                            <select name="myCars" id="cars" value="Job Title">
                                <option value=""> Job Title</option>
                                <option value=""> Judge</option>
                                <option value=""> Advocate</option>
                                <option value=""> Administaration</option>
                                <option value=""> Visiter</option>
                            </select>
                            <br/>
                            <input type="password" placeholder="Password"/>
                            <input type="password" placeholder="Retype Password"/>
                            <br/>
                            <div className="log-sec">
                                <input type="button" value="SIGNUP"/>
                            </div>
                            <div className="sign-link">
                                <h3>If you have already account?<a href="">Login</a></h3>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp