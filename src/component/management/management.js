import "./management.css";
import { __Addcard } from "../../API_URL";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Management() {
  const [cDetails, setCDetails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(__Addcard + "fetch").then((res) => {
      setCDetails(res.data)
    }).catch((err) => {
      console.log(err)
    });
  }, []);




  const changeuserstatus = (_id, s) => {
    console.log("Change status called with _id:", _id, "status:", s);
    if (s === "active") {
      axios.patch(__Addcard + "update",
        { "condition_obj": { "_id": _id }, "content_obj": { "status": 1 } }
      ).then(() => {
        setCDetails(cDetails.map(item => item._id === _id ? { ...item, status: 1 } : item));
      }).catch((err) => {
        console.log("Error updating status:", err);
      });
    }
    else if (s === "inactive") {
      axios.patch(__Addcard + "update",
        { "condition_obj": { "_id": _id }, "content_obj": { "status": 0 } }
      ).then(() => {
        setCDetails(cDetails.map(item => item._id === _id ? { ...item, status: 0 } : item));
      }).catch((err) => {
        console.log("Error updating status:", err);
      });
    }
    else if (s === "delete") {
      axios.delete(__Addcard + "delete",
        { "data": { "condition_obj": { "_id": _id } } }
      ).then(() => {
        alert("Item deleted successfully....");
        setCDetails(cDetails.filter(item => item._id !== _id));
      }).catch((err) => {
        console.log("Error deleting item:", err);
      });
    }
  };



  return (
    <div className="content">
      <div className="cards-container">
        {cDetails.map((item) => (
          <div className="auction-card" >

            {/* IMAGE SECTION */}
            <div className="card-image">
              <img
                src={`../../assets/uploads/userfile/${item.imgicon}`}
                alt={item.title}
              />
            </div>

            {/* DATA SECTION */}


            <div className="card-body">
              <h4><span><b>info:</b> {item.info}</span></h4>
              <br/>
              <h5><span><b>title:</b> {item.title}</span></h5>

              <p className="card-desc"><span><b>description:</b> {item.description}</span></p>

              <div className="card-row">
                <span><b>Category:</b> {item.catnm}</span>
                <span><b>Sub:</b> {item.subcatnm}</span>
              </div>

              <div className="card-row">

                {item.status ? <font color='blue'>Active</font> : <font color='black'>Inactive</font>}

                <br />
                <font style={{ cursor: 'pointer' }} onClick={() => { changeuserstatus(item._id, 'delete') }} color="red">Delete</font>





              </div>

              <button className="card-btn" onClick={() => changeuserstatus(item._id, item.status ? 'inactive' : 'active')}>{item.status ? 'Deactivate' : 'Activate'}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Management;




























