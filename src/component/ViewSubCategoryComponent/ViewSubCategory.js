import './ViewSubCategory.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { __subcategoryapiurl } from '../../API_URL';
import { useParams } from 'react-router-dom';

function ViewSubCategory() {
  const params = useParams();
  const [subcategoryList, setSubCategoryList] = useState([]);

  useEffect(() => {
    axios.get(__subcategoryapiurl + "fetch", {
      params: { "catnm": params.cnm }
    }).then((response) => {
      setSubCategoryList(response.data);
    }).catch((err) => {
      console.log(err);
    });
  }, [params.cnm]);

  return (
    <div className="content">
      {/* <h2 className="page-title">View Sub Categories</h2> */}

      <div className="subcategory-grid">
        {subcategoryList.map((row, index) => (
          <div className="subcategory-card" key={index}>
            <div className="img-wrapper">
              <img
                src={`../../assets/uploads/subcaticons/${row.subcaticonnm}`}
                alt={row.subcatnm}
                loading="lazy"
              />
            </div>
            <h3 className="subcat-name">{row.subcatnm}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewSubCategory;






// import './ViewSubCategory.css';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { __subcategoryapiurl } from '../../API_URL';
// import { Link, useParams } from 'react-router-dom';

// function ViewSubCategory() {
//   const params = useParams();
//   const [subcategoryList, setSubCategoryList] = useState([]);

//   useEffect(() => {
//     axios.get(__subcategoryapiurl + "fetch" ,{
//       params: { "catnm": params.cnm }  
//     }).then((response) => {
//       setSubCategoryList(response.data);
//       console.log(params.cnm)
//       // console.log(response.data);
//     }).catch((err) => {
//       console.log(err);
//     });
//   }, []);

//   return (
//     <>
//       <div className="content">
//         <h2> View Category Here!!!!!</h2>

//         <center>


//           {
//             subcategoryList.map((row) => (
//               <div>
//                 <img src={`../../assets/uploads/subcaticons/${row.subcaticonnm}`} height="120" width="150" />
//                 <br />
//                 <b>{row.subcatnm}</b>
//               </div>
//             ))
//           }

//         </center>
//       </div>

//     </>
//   );
// }

// export default ViewSubCategory;




