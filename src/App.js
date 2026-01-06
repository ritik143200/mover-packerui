// import Container from "./component/Container/Container"
import Header from "./component/Header/Header"
import Navigation from "./component/Navigation/Navigation"
import { Routes, Route } from "react-router-dom"
import About from "./component/about/about"
import Home from "./component/home/Home"
import Register from "./component/Register/Register"
import Login from "./component/Login/Login"
import Admin from "./component/Admin/Admin"
import User from "./component/User/User"
import Logout from "./component/logout/Logout"
import Manageusers from "./component/manageusers/Manageusers"
import Verifyuser from "./component/VerifyuserComponent/Verifyuser"
import CPAdmin from "./component/CPAdminComponent/CPAdmin"
import EPAdmin from "./component/EPAdminComponent/EPAdmin"
import AddCategory from "./component/AddCategoryComponent/AddCategory"
import AddSubCategory from "./component/AddSubCategoryComponent/AddSubCategory"
import ViewCategory from "./component/ViewCategoryComponent/ViewCategory"
import ViewSubCategory from "./component/ViewSubCategoryComponent/ViewSubCategory"
import Auth from "./component/AuthComponent/Auth"
import Footer from "./component/Footer/Footer"
import AIClient from "./component/AIClientComponent/AIClient"
import Charity from "./component/CharityComponent/Charity"
import Success from "./component/SuccessComponent/Success"
import Cancel from "./component/CancelComponent/Cancel"
import Addcard from "./component/Addcard/Addcard"
import Management from "./component/management/management"
import Payment from "./component/PaymentComponent/Payment"
import Service from "./component/service/service"
import Charitydetailes from "./component/charitydetailes/charitydetailes"
// import TracKConsignment from "./component/TrackConsignmentComponent/TrackConsignment"
// import TrackOrder from "./component/TrackOrder/TrackOrder"
// import UpdateOrderStatus from "./component/TrackOrder/UpdateOrderStatus"
function App() {
    return (
        <>
{/* <Addcard/> */}
<Auth />

            <Header />
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} ></Route>
                 <Route path="/userhome" element={<User />} ></Route>
                <Route path="/about" element={<About />} ></Route>
                <Route path="/ViewCategory" element={<ViewCategory />} ></Route >
                <Route path="/Register" element={<Register />} ></Route >
                <Route path="/vemail/:email" element={<Verifyuser />} ></Route>
                <Route path="/Login" element={<Login />} ></Route >
                <Route path="/logout" element={<Logout />} ></Route >
                <Route path="/admin" element={<Admin />} ></Route >
                <Route path="/manageusers" element={<Manageusers />} ></Route >
                <Route path="/Category" element={<AddCategory />} ></Route > 
                <Route path="/Subcategory" element={<AddSubCategory />} ></Route >
                <Route path="/viewcategory" element={<ViewCategory />} ></Route>
                <Route path="/ViewSubCategory/:cnm" element={<ViewSubCategory />} ></Route>
                <Route path="/user" element={<User />} ></Route >
                <Route path="/verifyuser" element={<Verifyuser />} ></Route >
                <Route path="/cpadmin" element={<CPAdmin />}></Route>
                <Route path="/epadmin" element={<EPAdmin />}></Route>
                <Route path="/AIClient" element={<AIClient />}></Route>
                <Route path="/Charity" element={<Charity />}></Route>
                 <Route path="/success" element={<Success />}></Route>
                 <Route path="/cancel" element={<Cancel />}></Route>
                 <Route path="/Addcard" element={<Addcard/>}></Route>
                  <Route path="/payment/:uid/:amt" element={<Payment/>}></Route>
                 <Route path="/management" element={<Management/>}></Route>
                 <Route path="/service" element={<Service/>}></Route>
                 <Route path="/charitydetailes" element={<Charitydetailes/>}></Route>
                 {/* <Route path="/TracKConsignment" element={ <TracKConsignment/>}></Route> */}
                                  {/* <Route path="/TrackOrder" element={<TrackOrder/>}></Route> */}
                                    {/* <Route path="/UpdateOrderStatus" element={<UpdateOrderStatus/>}></Route> */}

            </Routes>
            
            
<Footer/>







        </>

    )

}


export default App