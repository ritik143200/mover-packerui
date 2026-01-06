import './CPAdmin.css';
import { useState } from 'react';
import { __userapiurl } from '../../API_URL';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CPAdmin() {

  const navigate = useNavigate();
  const [output, setOutput] = useState();
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [opassword, setOldPassword] = useState();
  const [npassword, setNewPassword] = useState();
  const [cnpassword, setConfirmNewPassword] = useState();

  const handleSubmit = () => {

// if(!opassword) setOutput("password is required")
// if(!npassword) setOutput("new password is required")
// if(!cnpassword) setOutput("comfirm password is required")

    axios.get(__userapiurl + "fetch", {
      params: { "email": email, "password": opassword }
    }).then((result) => {
      if (npassword == cnpassword) {
        axios.patch(__userapiurl + "update",
          { "condition_obj": { "email": email }, "content_obj": { "password": cnpassword } }
        ).then(() => {
          alert("Password Updated Success...");
          navigate("/login");
        });
      }
      else {
        setOutput("New & Confirm New Password Mismatch....");
        setNewPassword("");
        setConfirmNewPassword("");
      }
    }).catch((error) => {
      setOutput("Invalid old password....");
      setOldPassword("");
    });
  };

  return (
    <>
      <div className="content">
        <div id="CPbody">
          <div class="CPcontainer">
            <form class="form-box">

              <h2>Change Password</h2>

              <font color="blue" >{output}</font>

              <div class="input-group">
                <label>Current Password</label>
                <input type="password" placeholder="Enter current password" onChange={e => setOldPassword(e.target.value)} value={opassword}  required/>
              </div>

              <div class="input-group">
                <label>New Password</label>
                <input type="password" placeholder="Enter new password" onChange={e => setNewPassword(e.target.value)} value={npassword}  required/>
              </div>

              <div class="input-group">
                <label>Confirm New Password</label>
                <input type="password" placeholder="Confirm new password" onChange={e => setConfirmNewPassword(e.target.value)} value={cnpassword}  required/>
              </div>

              <button type="submit" class="btn" onClick={handleSubmit}>Update Password</button>
            </form>
          </div>
        </div>

</div>


    </>
  );
}

export default CPAdmin;




