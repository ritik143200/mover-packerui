function About() {
    return (
        <>




            <div className="content">

                <div className="mycard">

                    <div className="card">
                        <img src="./assets/images/auction1.webp" alt="Product Image" />
                        <div className="card-content">
                            <h3>Tittle goes here</h3>
                            <span className="price">$25.75</span>
                            <p>Lorem ipsum dolor sit amet, adipisicing elit. Itaque, corporis nulla aspernatur.</p>

                            <div className="rating">
                                ⭐⭐⭐⭐⭐
                                <span className="reviews">Reviews (24)</span>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <img src="./assets/images/auction1.webp" alt="Product Image" />
                        <div className="card-content">
                            <h3>Tittle goes here</h3>
                            <span className="price">$30.25</span>
                            <p>Lorem ipsum dolor sit amet, adipisicing elit. Itaque, corporis nulla aspernatur.</p>

                            <div className="rating">
                                ⭐⭐⭐⭐⭐
                                <span className="reviews">Reviews (21)</span>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <img src="./assets/images/auction1.webp" alt="Product Image" />
                        <div className="card-content">
                            <h3>Tittle goes here</h3>
                            <span className="price">$20.45</span>
                            <p>Sixteen Clothing is free CSS template provided by TemplateMo.</p>

                            <div className="rating">
                                ⭐⭐⭐⭐⭐
                                <span className="reviews">Reviews (36)</span>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                      </div>
                       <h1>Mover & Packer Management System is a full-stack web application developed to simplify and manage relocation services. The project helps users book moving and packing services online in an easy and secure way. It includes user authentication, service booking, and request management features. Admin can manage users, bookings, and service details efficiently. The application is designed with a user-friendly interface and focuses on providing a smooth and reliable experience.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident sapiente harum eos optio quidem quos ab facilis, repudiandae commodi? Ipsa nemo facere aspernatur repellendus quaerat. Voluptatem, asperiores, tenetur illo esse dolorum, aperiam in sint tempore consequatur nam quidem ipsam harum vitae quas est. Dicta repudiandae minima architecto maxime, enim nobis?</h1>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident sapiente harum eos optio quidem quos ab facilis, repudiandae commodi? Ipsa nemo facere aspernatur repellendus quaerat. Voluptatem, asperiores, tenetur illo esse dolorum, aperiam in sint tempore consequatur nam quidem ipsam harum vitae quas est. Dicta repudiandae minima architecto maxime, enim nobis?</h1>
   <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident sapiente harum eos optio quidem quos ab facilis, repudiandae commodi? Ipsa nemo facere aspernatur repellendus quaerat. Voluptatem, asperiores, tenetur illo esse dolorum, aperiam in sint tempore consequatur nam quidem ipsam harum vitae quas est. Dicta repudiandae minima architecto maxime, enim nobis?</h1>
  <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident sapiente harum eos optio quidem quos ab facilis, repudiandae commodi? Ipsa nemo facere aspernatur repellendus quaerat. Voluptatem, asperiores, tenetur illo esse dolorum, aperiam in sint tempore consequatur nam quidem ipsam harum vitae quas est. Dicta repudiandae minima architecto maxime, enim nobis?</h1>
                    </div>
   



          


        </>
    )
}
export default About




// import "./Cards.css";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { __Addcard } from "../../API_URL";

// function Cards() {

//   const [cards, setCards] = useState([]);

//   useEffect(() => {
//     axios.get(__Addcard + "fetch")
//       .then((res) => {
//         setCards(res.data);   // array of data
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   return (
//     <div className="cards-container">
//       {
//         cards.map((item, index) => (
//           <div className="card-box" key={index}>
            
//             <img
//               src={`http://localhost:3001/uploads/${item.imgicon}`}
//               alt="icon"
//               className="card-img"
//             />

//             <h3>{item.title}</h3>
//             <p><b>Description:</b> {item.description}</p>
//             <p><b>Address:</b> {item.addresh}</p>
//             <p><b>Name 1:</b> {item.name1}</p>
//             <p><b>Name 2:</b> {item.name2}</p>

//           </div>
//         ))
//       }
//     </div>
//   );
// }

// export default Cards;











