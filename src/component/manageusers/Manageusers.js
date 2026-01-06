import './Manageusers.css'
import { useState, useEffect } from "react"
import axios from 'axios'
import { __userapiurl } from '../../API_URL';
import { useNavigate } from 'react-router-dom';
function Manageusers() {
const navigate = useNavigate();
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get(__userapiurl+"fetch",{
            params: { "role": "user" }
        }).then((result) => {
            setUsers(result.data)
            console.log(users)
        }).catch((error) => {
            console.log(error)
        })
    })



    const changeuserstatus=(_id,s)=>{
    if(s=="active")
    {
      axios.patch(__userapiurl+"update",
        {"condition_obj":{"_id":_id},"content_obj":{"status":1}}
      ).then(()=>{
        navigate("/manageusers");      
      });    
    }
    else if(s=="inactive")
    {
      axios.patch(__userapiurl+"update",
        {"condition_obj":{"_id":_id},"content_obj":{"status":0}}
      ).then(()=>{
        navigate("/manageusers");      
      });    
    }
    else
    {
      axios.delete(__userapiurl+"delete",
        {"data":{"_id":_id}}
      ).then(()=>{
        alert("User deleted successfully....");
        navigate("/manageusers");      
      });
    }  
  };




    return (

        <>
            <div className="content">
              
                <center><h1>users/management</h1></center>

                {
                    users.map((row) => (
                        <table border={2} cellPadding={5} cellSpacing={5}>
                            <tr>
                                <th>Userid</th>
                                <th>name</th>
                                <th>email</th>
                                <th>mobile</th>
                                <th>address</th>
                                <th>city</th>
                                <th>gender</th>
                                <th>info</th>
                                <th>status</th>
                                <th>Action</th>
                            </tr>
                            <tr>
                                <td>{row._id} </td>
                                <td>{row.name} </td>
                                <td>{row.email} </td>
                                <td>{row.mobile} </td>
                                <td>{row.address} </td>
                                <td>{row.city} </td>
                                <td>{row.gend} </td>
                                <td>{row.info} </td>
                                <td>{row.status}  </td>
                                <td> {row.status ? <font color='blue'>Active</font> : <font color='black'>unActive</font>}</td>

                               <td>{row.status ? <font onClick={ ()=>{ changeuserstatus(row._id,'inactive') }} color='blue'>Change Status</font> : <font onClick={ ()=>{ changeuserstatus(row._id,'active') }} color='blue'>Change Status</font>}
                                    <br />
                                    <font onClick={ ()=>{ changeuserstatus(row._id,'delete') }} color="red">Delete</font>

                                </td>

                            </tr>
                        </table>
                    ))
                }
            </div>

        </>
    )
}


export default Manageusers