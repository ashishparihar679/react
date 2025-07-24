import React from "react";
import { useState,useEffect } from "react"
import axios from "axios";
import "./style.css"

const Superdashboard = ()=>{
    let api_url ='http://localhost:3001/user'
    let [initialdata,updatedata]=useState([]);
    useEffect(()=>{
        const fetchdata=async()=>{

            try {
                let response = await axios.get(api_url);
                updatedata(response.data)
            } catch (error) {
                alert("data not found")
            }
        }
        fetchdata();
    },[])
    console.log(initialdata);
    return(
        <>
        <div>Superdashboard</div>
        <table className="ashishtable">
            <tr>
                <th>ID</th>
                <th>name</th>
                <th>email</th>
                <th>mobile</th>
                <th>password</th>
            </tr>
            {
                initialdata.map((e)=>
                    <tr>

                  <td>{e.id}</td>  
                  <td>{e.name}</td>  
                  <td>{e.email}</td>  
                  <td>{e.mobile}</td>  
                  <td>{e.password}</td>  
                    
                    
                    </tr>
                 
                )
            }
        </table>
        </>
    )
}
export default Superdashboard;