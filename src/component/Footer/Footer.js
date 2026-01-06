import "./Footer.css"

function Footer() {


    return (

        <>


<footer className="footer">
  <div className="footer-box">

    {/* <!-- Brand --> */}
    <div className="brand">
      <img src="../assets/images/1048315.png" alt="truck"/>
      <h2>Mover & Packer</h2>
      <p>Safe • Fast • Reliable Relocation Services</p>

      {/* <!-- Social Icons --> */}
      <div class="social">
        <img src="../assets/images/733547.png"/>
        <img src="../assets/images/733558.png"/>
        <img src="../assets/images/733635.png"/>
      </div>
    </div>

    {/* <!-- Links --> */}
    <div class="links">
      <h3>Quick Links</h3>
      <a href="/">Home</a>
     <a href="/About">About</a>
      <a href="/Service">Service</a>
      <a href="/Register">Register</a>
      <a href="/login">Login</a>
    </div>

    {/* <!-- Contact --> */}
    <div class="contact">
      <h3>Contact</h3>
      <p>📍 India</p>
      <p>📞 +91 7489701324</p>
      <p>✉ silodiyaritik@gmail.com.com</p>
    </div>

    {/* <!-- Newsletter --> */}
    <div class="newsletter">
      <h3>Newsletter</h3>
      <p>Get moving tips & offers</p>
      <input type="email" placeholder="Enter email"/>
      <button onclick="subscribe()">Subscribe</button>
    </div>

  </div>

  <div class="copy">
    © 2025 Mover & Packer | All Rights Reserved
  </div>

            </footer>



        </>
    )
}


export default Footer
