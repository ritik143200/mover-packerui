import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Login.css'
import ReCAPTCHA from "react-google-recaptcha"



function Login() {

     

    // const [error ,setError]=("")
    // const [captchaValue,setCaptchaValue]=("")
    const navigate = useNavigate()
    const [output, setOutput] = useState("")
    const [email, setEmail] = useState("")
    
    const [password, setPassword] = useState("")



// const key="6LeohTYsAAAAAKh_2GTUNnx_xH3hH-6nnG_f72Ai"


// const handleCaptchaChange=(value)=>{
    // setCaptchaValue(value)
    // setError("")
// }

    const handleSubmit = (e) => {
 if(!email ) return setOutput("email is required")
        if(!password ) return setOutput("password is required")

// if(!captchaValue){
    // setErroe()
    // return 
// }

        const user = { "email": email, "password": password }
        const api_url = "http://localhost:3001/user/login";
        axios.post(api_url, user).then((responce) => {
            const users = responce.data.users

            localStorage.setItem("token", responce.data.token)
            localStorage.setItem("name", users.name)
            localStorage.setItem("email", users.email)
            localStorage.setItem("address", users.address)
            localStorage.setItem("mobile", users.mobile)
            localStorage.setItem("city", users.city)
            localStorage.setItem("gender", users.gender)
            localStorage.setItem("role", users.role)
            localStorage.setItem("info", users.info)
            //  localStorage.setitem("password",user.password)

            users.role == "/admin" ? navigate("/admin") : navigate("/user")
        }).catch((error) => {
            console.log(error)
            setOutput("Invalid user or please verify your account....");
            setEmail("")
            setPassword("")
        })
    }
    return (
        <>
            <div className="content">
                <div id="body">
                    <div className="login">
                        <form className="login-box">

                            <h2>Welcome Back</h2>
                            <p className="subtitle">Please login to continue</p>
                            <font color="black" >{output}</font>
                            <div className="input-group">
                                <label>Email Address</label>
                                <input type="email" placeholder="Enter your email" onChange={e => setEmail(e.target.value)} value={email} required />
                            </div>

                            <div className="input-group">
                                <label>Password</label>
                                <input type="password" placeholder="Enter your password" onChange={e => setPassword(e.target.value)} value={password} required />
                            </div>

                            <a href="#" className="forgot">Forgot Password?</a>

                            {/* <ReCAPTCHA sitekey={key} onChange={handleCaptchaChange}></ReCAPTCHA> */}
                        
                            <button type="button" className="btn" onClick={handleSubmit}>Login</button>

                            <p className="register">Don't have an account? <a href="/register">Register</a></p>
  
    
                        </form>
    
                    </div>
                </div>
            </div >

        </>
    )

 }

export default Login


// const key="6LeohTYsAAAAAIkPvUYY3uCBw9Ukt7HuWEnfPXK2"


// const handleCaptchaChange=(value)=>{
    // setCaptchaValue(value)
    // setError("")
