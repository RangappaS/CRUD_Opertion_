import axios from 'axios'
import React, { useEffect, useState } from 'react'

import css from "./menu.module.css"
import { Link } from 'react-router-dom'


const Employe = () => {

 


  let [content,setContent]=useState([])

  useEffect(()=>{
    
   
    axios.get("http://localhost:3000/users")
    .then((result)=>{
      console.log("got the data");
     console.log(result.data);
     setContent(result.data)
    })
    .catch(()=>{
      console.log("something is fisy");
    })
    
  },[])

  let deleteData=(value)=>{


    
    axios.delete(`http://localhost:3000/users/${value}`)
    window.location.assign('/b')


  

  }
  return (
    <div id={css.emp}>
     {content.map((x)=>{
      return(
        <div id={css.details}>
          <table>
            <tr>
              <th colSpan="2">Emp :- {x.id}</th>
            </tr>
            <tr>
              <td>Empolye Name </td>
              <td>:{x.name}</td>
            </tr>
            <tr>
              <td>Account No</td>
              <td>: {x.account}</td>
            </tr>
            <tr>
              <td>Bank Name</td>
              <td>:{x.bank}</td>
            </tr>
            <tr>
             
              <td ><button className={css.btn} onClick={()=>{deleteData(x.id)}}>REMOVE</button></td>
              <td><Link to={`/edit/${x.id}`}>EDIT</Link></td>
            </tr>
            
          </table>
        </div>
      )
     })}
    </div>
  )
}

export default Employe
