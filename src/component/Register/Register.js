import './Register.css'
import { useState } from 'react'
import axios from 'axios'
import React from 'react'
import User from '../User/User'

function Register() {

    const [output, setOutput] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [address, setAddress] = useState("")
    // const [city, setCity] = useState()
    const [gender, setGender] = useState("")
    const [city, setCity] = useState("");
    const [mobile, setMobile] = useState("");

    const handleSubmit = (e) => {

        const user = { "name": name, "email": email, "password": password, "address": address, "gender": gender, "city": city, "mobile": mobile }
         if(!name ) return setOutput("name is required")
            if(!email) return setOutput("email is required")
         if(!password) return setOutput("password is required")
            if(!address) return setOutput("address is required")
                if(!gender) return setOutput("gender is required")
         if(!city) return setOutput("city is required")
         if(!mobile) return setOutput("mobile is required")
         
        


        const api_url = "http://localhost:3001/user/save"
        axios.post(api_url, user).then(() => {
            setOutput("form sumitted")
            setName("");
            setEmail("");
            setPassword("");
            setAddress("");
            setGender("");
            setCity("");
            setMobile("");
        }).catch((error) => {
            console.log(error)
            setOutput("User registration failed....");
        })
    }




    return (
        <>
            <div className="content">
                <div id="Registerbody">
                    <div className="Registercontainer">
                        <form className="register-box">

                            <h2>Create Account</h2>
                            <p className="subtitle">Please fill the details to register</p>
                            <font color="black" >{output}</font>
                            <div className="input-group">
                                <label>Full Name</label>
                                <input type="text" placeholder="Enter your full name" onChange={e => setName(e.target.value)} value={name} />
                            </div>

                            <div className="input-group">
                                <label>Email Address</label>
                                <input type="email" placeholder="Enter your email" onChange={e => setEmail(e.target.value)} value={email} />
                            </div>


                            <div className="input-group">
                                <label>Password</label>
                                <input type="password" placeholder="Create password" onChange={e => setPassword(e.target.value)} value={password} />
                            </div>

                            <div className="input-group">
                                <label>Addresh</label>
                                <input type="Address" placeholder="Enter-Address" onChange={e => setAddress(e.target.value)} value={address} />
                            </div>

                            <div className="input-group">
                                <label>Gender:</label>
                                Male <input type="radio" onChange={e => setGender(e.target.value)} value="male" />
                                &nbsp;&nbsp;
                                Female <input type="radio" onChange={e => setGender(e.target.value)} value="female" />
                                {/* <label>Username</label> */}
                                {/* <input type="text" placeholder="Choose a username" required /> */}
                            </div>

                            <div className="input-group">

                                <label>Mobile:</label>
                                <input type="text" onChange={e => setMobile(e.target.value)} value={mobile} />
                            </div>


                            <div className="input-group">
                                <label>City:</label>
                                <select onChange={e => setCity(e.target.value)} value={city}>
                                    <option>Select City</option>
                                    <option>Indore</option>
                                    <option>Bhopal</option>
                                    <option>Ujjain</option>
                                </select>

                            </div>


                            <button type="button" className="btn" onClick={handleSubmit}>Register</button>

                            <p className="login-link">Already have an account? <a href="login.html">Login</a></p>
<user email={email}/>
                        </form>
                    </div>
                </div>
            </div>






        </>
    )
}


export default Register
