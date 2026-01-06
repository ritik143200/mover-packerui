import "./Addcard.css"
import { useEffect, useState } from "react"
import { __categoryapiurl, __subcategoryapiurl, __Addcard } from '../../API_URL';
import axios from "axios"
import { useParams } from 'react-router-dom';
function Addcard() {

    const params = useParams();

    const [title, setTitle] = useState("")
    const [descrip, setDescrip] = useState("")
    const [addresh, setAddresh] = useState("")
    const [catnm, setCatnm] = useState("")
    const [subcatnm, setsubcatnm] = useState("")
    const [imgicon, setimgicon] = useState()
    const [cDetails, setCDetails] = useState([])
    const [cDetails2, setCDetails2] = useState([])
    const [output, setOutput] = useState("")


    useEffect(() => {
        axios.get(__categoryapiurl + "fetch").then((responce) => {
            setCDetails(responce.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    useEffect(() => {
        axios.get(__subcategoryapiurl + "fetch", {
            params: { "catnm": catnm }
        }).then((responce) => {
            setCDetails2(responce.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [catnm])


    const handlechange = (e) => {
        setimgicon(e.target.files[0]);
    }


    const handlesubmit = (e) => {
        e.preventDefault();

        const formdata = new FormData();
        formdata.append('title', title);
        formdata.append('description', descrip);
        formdata.append('addresh', addresh);
        formdata.append('catnm', catnm);
        formdata.append('subcatnm', subcatnm);
        formdata.append('imgicon', imgicon);



        axios.post(__Addcard + "save", formdata, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(() => {
            setOutput("ok")
            setTitle("");
            setDescrip("");
            setAddresh("");
            setCDetails([]);
            setCDetails([]);
            setimgicon(null)
        }).catch((error) => {
            setOutput("No")
            console.log(error);
        })



    }
    return (
        <>

            <div className="content">
    


                    <form>
                        <font>{output}</font>
                        <label>title</label>
                        <input type="text" onChange={e => setTitle(e.target.value)} value={title} />
                        <br />

                        <lable>discription</lable>
                        <input type="text" onChange={e => setDescrip(e.target.value)} value={descrip} />
                        <br />

                        <lable>catgory</lable>
                        <select onChange={e => setCatnm(e.target.value)} value={catnm}>
                            <option>select-catgories</option>
                            {
                                cDetails.map((row) => (
                                    <option key={row._id} value={row.catnm} >{row.catnm}</option>
                                ))
                            }
                        </select>
                        <br />
                        <br />

                        <lable>sub-category</lable>
                        <select onChange={e => setsubcatnm(e.target.value)} value={subcatnm}>
                            <option>select-subcategory</option>
                            {
                                cDetails2.map((row) => (
                                    <option key={row._id} value={row.subcatnm} >{row.subcatnm}</option>
                                ))
                            }
                        </select>
                        <br />

                        <lable>send-picture</lable>
                        <input type="file" name="imgicon" onChange={handlechange} />
                        <br />

                        <label>addresh</label>
                        <input type="text" onChange={e => setAddresh(e.target.value)} value={addresh} />
                        <br />

                        <button onClick={handlesubmit}>Addcard</button>
                    </form>
    
            </div>



        </>
    )
}

export default Addcard;




