import "./charitydetailes.css"
import { __paymentdoneapiurl } from "../../API_URL"
import axios from 'axios'
import { useState } from "react"


function Charitydetailes() {

    const [paymentdata, setPaymentdata] = useState([])
    axios.get(__paymentdoneapiurl + "fetch").then((res) => {
        setPaymentdata(res.data)
    }).catch((error) => {
        console.log(error)
    })

    return (
<>
{/* <div className="content">
    <div>
        {
            paymentdata.map((row) => (
                <table>
                    <tbody>
                        <tr><th>id</th><th>userId</th><th>amount</th></tr>
                        <tr><td>{row._id}</td><td>{row.userId}</td><td>{row.amount}</td></tr>

                    </tbody>
                </table>

            ))
        }
    </div>
</div> */}
<>
<table style={{ borderCollapse: "collapse", width: "80%", margin: "20px auto" }}>
  <thead>
    <tr style={{ backgroundColor: "#f2f2f2" }}>
      <th style={{ border: "1px solid #ddd", padding: "8px" }}>id</th>
      <th style={{ border: "1px solid #ddd", padding: "8px" }}>userId</th>
      <th style={{ border: "1px solid #ddd", padding: "8px" }}>amount</th>
    </tr>
  </thead>
  <tbody>
    {paymentdata.map((row) => (
      <tr key={row._id}>
        <td style={{ border: "1px solid #ddd", padding: "8px" }}>{row._id}</td>
        <td style={{ border: "1px solid #ddd", padding: "8px" }}>{row.userId}</td>
        <td style={{ border: "1px solid #ddd", padding: "8px" }}>{row.amount}</td>
      </tr>
    ))}
  </tbody>
</table>
</>


</>
)
}



export default Charitydetailes