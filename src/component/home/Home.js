import { Link } from "react-router-dom"
import "./Home.css"
function Home() {

    return (
        <>
 <div className="content">
<section className="welcome">
  <div className="text">
  <h2>Moving Made Simple & Stress-Free</h2>
    <p>
      
We provide safe, reliable, 
and affordable mover & packer services.
Book your relocation online with ease and confidence.
Your belongings, our responsibility.
    </p>
    <button onclick="welcome()"><a> <Link to="/Register">Get Started</Link></a></button>
  </div>

  <div className="visual">
    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
         alt="Moving Service"/>
  </div>
</section>

<script src="script.js"></script>
</div>
        
        </>
    )


}
export default Home