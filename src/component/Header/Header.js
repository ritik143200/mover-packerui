
import { useEffect, useState } from "react"

function Header() {

    const [header, setHeader] = useState("")
    useEffect(() => {

        setInterval(() => {

            if (localStorage.getItem("token") != undefined && localStorage.getItem("role") == "admin") {
                setHeader(<>

                    <div className="header">
                         <div className="logo1" ><img src="../assets/images/fridge.png" width="60" /></div>
                        <h1>Admin/Silodiya482@gmail.com</h1>
                        <a href="#">movers&packer</a>
                    </div>
                </>)


            } else if (localStorage.getItem("token") != undefined && localStorage.getItem("role") == "user") {

                setHeader(

                    <>


                        <div className="header">
                             <div className="logo1" ><img src="./assets/images/fridge.png" width="60" /></div>
                            <h1>User/Silodiya482@gmail.com</h1>
                            <a href="#">movers&packer</a>
                            
                        </div>

                    </>

                )
            } else {

                setHeader(


                    <>


                        <div className="header">

                            <div className="logo1" ><img src="./assets/images/fridge.png" width="60" /></div>
                            <h1>wellcome to mover&packer</h1>
                            
                            <a href="#">mover&packer</a>
                            
                        </div>

                    </>
                )
            }

        }, 1)

    }, [])



    return (

        <>
        {/* <Auth /> */}
            {header}

        </>
    )
}


export default Header
