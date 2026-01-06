import './Service.css'

function Service(){


    return(

        <>
        
        {/* <section className="welcome"> */}

            {/* <p>Mover & Packer Management System is a full-stack web application developed to simplify and manage relocation services. The project helps users book moving and packing services online in an easy and secure way. It includes user authentication, service booking, and request management features. Admin can manage users, bookings, and service details efficiently. The application is designed with a user-friendly interface and focuses on providing a smooth and reliable experience.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident sapiente harum eos optio quidem quos ab facilis, repudiandae commodi? Ipsa nemo facere aspernatur repellendus quaerat. Voluptatem, asperiores, tenetur illo esse dolorum, aperiam in sint tempore consequatur</p> */}
{/* </section> */}
<section class="services-container">
    <div class="service-card">
      <div class="icon">📦</div>
      <h3>Packing Services</h3>
      <p>We carefully pack your goods with high-quality materials to ensure safety during transport.</p>
    </div>

    <div class="service-card">
      <div class="icon">🚚</div>
      <h3>Loading & Unloading</h3>
      <p>Our team handles heavy lifting with care, saving your time and avoiding damages.</p>
    </div>

    <div class="service-card">
      <div class="icon">🛻</div>
      <h3>Transportation</h3>
      <p>Safe and timely delivery with fully insured transport vehicles for all your moves.</p>
    </div>

    <div class="service-card">
      <div class="icon">🏠</div>
      <h3>Unpacking & Setup</h3>
      <p>We unpack your belongings and set up furniture efficiently, so you settle in quickly.</p>
    </div>

    {/* <div class="service-card">
      <div class="icon">🧹</div>
      <h3>Cleaning Services</h3>
      <p>Optional cleaning services to make your old and new place neat after moving.</p>
    </div> */}

    {/* <div class="service-card">
      <div class="icon">💼</div>
      <h3>Corporate Moves</h3>
      <p>Specialized services for offices and corporate clients for smooth relocation.</p>
    </div> */}
  </section>
        
        </>
    )
}


export default Service;
