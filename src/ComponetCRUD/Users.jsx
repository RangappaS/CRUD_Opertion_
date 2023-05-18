import axios from 'axios'
import React, { useEffect, useState } from 'react'

import css from "./home.module.css"
import { Link } from 'react-router-dom'


const Users = () => {

 


  let [content,setContent]=useState([])

  useEffect(()=>{
    //STEP=02
    //To use get method in axios, we use axios.get() which takes a mandatory argument (URL).
    // Axios is pretty different than fetch, 
   
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


    //STEP=05
    //IT is delete method you dont need data we can remove it data to userinterface and we can use delete method
    axios.delete(`http://localhost:3000/users/${value}`)
    window.location.assign('/b')


    //its END

  }
  return (
    <div id={css.users}>
     {content.map((x)=>{
      return(
        <div id={css.cards}>
          <table>
            <tr>
              <th colSpan="2">USER :- {x.id}</th>
            </tr>
            <tr>
              <td>Name </td>
              <td>:{x.name}</td>
            </tr>
            <tr>
              <td>Salary</td>
              <td>: {x.salary}</td>
            </tr>
            <tr>
              <td>Company</td>
              <td>:{x.company}</td>
            </tr>
            <tr>
              <td><Link to={`/edit/${x.id}`}>EDIT</Link></td>
              <td ><button className={css.btn} onClick={()=>{deleteData(x.id)}}>DELETE</button></td>
            </tr>
            
          </table>
        </div>
      )
     })}
    </div>
  )
}

export default Users
