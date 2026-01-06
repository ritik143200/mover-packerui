import './ViewCategory.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { __categoryapiurl } from '../../API_URL';
import { Link } from 'react-router-dom';

function ViewCategory() {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    axios.get(__categoryapiurl + "fetch")
      .then((response) => setCategoryList(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="content">
      <div className='ritik'>
      <div className="category-grid">
        {categoryList.map((row, index) => (
          <Link
            to={`/ViewSubCategory/${row.catnm}`}
            className="category-card"
            key={index}
          >
            <div className="category-img-box">
              <img
                src={`../assets/uploads/caticons/${row.caticonnm}`}
                alt={row.catnm}
              />
            </div>
            <h3 className="category-name">{row.catnm}</h3>
          </Link>
        ))}
      </div>
      </div>
    </div>
  );
}

export default ViewCategory;





// import './ViewCategory.css';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { __categoryapiurl } from '../../API_URL';
// import { Link } from 'react-router-dom';

// function ViewCategory() {
//   const [categoryList, setCategoryList] = useState([]);

//   useEffect(() => {
//     axios.get(__categoryapiurl + "fetch").then((response) => {
//       setCategoryList(response.data);
//     }).catch((err) => {
//       console.log(err);
//     });
//   }, []);

//   return (
//     <>
//       <div className="content">
//          <div className="cards-container">
        

      


//           {
//             categoryList.map((row) => (

//               <div className="card-body">
//                 <Link to={`/ViewSubCategory/${row.catnm}`} >
//                   <img src={`../assets/uploads/caticons/${row.caticonnm}`} height="120" width="150" />
//                   <br />
//                   <b>{row.catnm}</b>
//                 </Link>
//               </div>

//             ))
//           }

//            </div>
        
//       </div>


//     </>
//   );
// }

// export default ViewCategory;




