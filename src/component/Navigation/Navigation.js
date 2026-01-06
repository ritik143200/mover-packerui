import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
function Navigation() {

    const [navbar, setNavbar] = useState("")
    useEffect(() => {

        setInterval(() => {
            if (localStorage.getItem("token") != undefined && localStorage.getItem("role") == "admin") {

                setNavbar(<>
                    {/* <!-- SIDEBAR --> */}
                    <div className="sidebar">
                        <a><Link to="/Admin">Admin</Link></a>
                        <a><Link to="/manageusers">Manageusers</Link></a>
                        <a><Link to="/Category">Category</Link></a>
                        <a><Link to="/Subcategory">Subcategory</Link></a>
                        <a><Link to="/management">management</Link></a>
                         {/* <a><Link to="/TrackOrder">TrackOrder</Link></a> */}
                        <a><Link to="/cpadmin">Change-password</Link></a>
                        <a><Link to="/epadmin">Edite-profile</Link></a>
                        <a><Link to="/Login">Login</Link></a>
                         {/* <a><Link to="/orderRoutes">orderRoutes</Link></a> */}
                        <a><Link to="/logout">Logout</Link></a>
                         <a><Link to="/Charitydetailes">Charitydetailes</Link></a>
                    </div>
                </>)
            } else if (localStorage.getItem("token") != undefined && localStorage.getItem("role") == "user") {

                setNavbar(

                    <>

                        <div className="sidebar">
                            <a><Link to="/User">Home</Link></a>
                            <a><Link to="/About">About</Link></a>
                            <a><Link to="/viewcategory">ViewCategory</Link></a>
                            <a><Link to="/Addcard">Addcard</Link></a>
                            {/* <a href="/viewcategory">ViewCategory</a> */}
                            <a><Link to="/cpadmin">Change-password</Link></a>
                            <a><Link to="/epadmin">Edite-profile</Link></a>
                            <a><Link to="/Login">Login</Link></a>
                            <a><Link to="/logout">Logout</Link></a>
                            <a><Link to="/Charity">Charity</Link></a>
                           
                        </div>
                    </>
                )
            } else {
                setNavbar(
                    <>
                        {/* <!-- SIDEBAR --> */}
                        <div className="sidebar">
                            {/* <li><a><Link to="/logout">Logout</Link></a></li> */}
                            {/* <a> <Link to="/">Home</Link></a>
                            <a href="/About">About</a>
                            <a href="/Service">Service</a>
                            <a href="/Register">Register</a>
                             <a href="/Login">Login</a>
                             */}
                            <a> <Link to="/">Home</Link></a>
                            <a> <Link to="/About">About</Link></a>
                            <a> <Link to="/AIClient">ChatSupport </Link></a>
                            <a> <Link to="/Service">Service </Link></a>
                            <a> <Link to="/Register">Register</Link></a>
                            <a> <Link to="/Login">Login</Link></a>

                        </div>
                    </>)
            }

        }, 1)
    }, [])
    return (

        <>
            {navbar}

        </>
    )
}


export default Navigation
