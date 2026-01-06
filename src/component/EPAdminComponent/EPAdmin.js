import './EPAdmin.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { __userapiurl } from '../../API_URL';
import { useNavigate } from 'react-router-dom';

function EPAdmin() {

  const navigate = useNavigate();
  const [ output , setOutput ] = useState();  
  const [ name , setName ] = useState();
  const [ email , setEmail ] = useState();  
  const [ mobile , setMobile ] = useState();
  const [ address , setAddress ] = useState();
  const [ city , setCity ] = useState();
  const [ gender , setGender ] = useState();

  useEffect(()=>{
    axios.get(__userapiurl+"fetch",{
      params : {"email":localStorage.getItem("email")}
    }).then((result)=>{
      var users=result.data[0];
      setName(users.name);
      setEmail(users.email);
      setMobile(users.mobile);
      setAddress(users.address);
      setCity(users.city);
    }).catch((error)=>{
      console.log(error);
    });  
  },[]);

  const handleSubmit=()=>{
    axios.patch(__userapiurl+"update",
      {"condition_obj":{"email":email},"content_obj":{"name":name,"mobile":mobile,"address":address,"city":city,"gender":gender}}
    ).then(()=>{
      alert("Profile edited successfully....");
      navigate("/epadmin");      
    }); 
   };

  return (
    <>
      <div className="content">
        <div id="epbody">
          <div class="profile-box">
            <h2>Edit Profile</h2>

            <div class="profile-pic">
              <img src="./assets/images/auction1.webp" alt="Profile Picture" />
              <button class="change-btn">Ritik</button>
            </div>

            <form>
              <label>Full Name</label>
              <input type="text" placeholder="Enter your name" onChange={e => setName(e.target.value)} value={name} />

              <label>Email</label>
              <input type="email" placeholder="Enter your email" onChange={e => setEmail(e.target.value)} value={email} readOnly="readonly" />

              {/* <label>Bio</label>
        <textarea placeholder="Write something..."></textarea> */}

              <label>Mobile:</label>
              <input type="text" onChange={e => setMobile(e.target.value)} value={mobile} />

              <label>Addresh</label>
              <input type="Address" placeholder="Enter-Address" onChange={e => setAddress(e.target.value)} value={address} />

              <label>Gender:</label>
              Male <input type="radio" checked={gender==="male"} onChange={e => setGender(e.target.value)} value="male" />
              &nbsp;&nbsp;
              Female <input type="radio" checked={gender==="female"} onChange={e => setGender(e.target.value)} value="female" />

              <label>City:</label>
              <select onChange={e => setCity(e.target.value)} value={city}>
                <option>Select City</option>
                <option>Indore</option>
                <option>Bhopal</option>
                <option>Ujjain</option>
              </select>
              <button class="save-btn" onClick={handleSubmit}>Save Changes</button>
            </form>
          </div>
        </div>
      </div>

    </>
  );
}

export default EPAdmin;




