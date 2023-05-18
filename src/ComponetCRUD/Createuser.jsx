import React, { useState } from 'react'
import css from './home.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Createuser = () => {

  let[name,setName]=useState(" ")
  let[salary,setSalary]=useState(" ")
  let[company,setCompany]=useState( " ")

  let nameData=(e)=>{
    setName(e.target.value)
  }

  let salaryData=(e)=>{
    setSalary(e.target.value)
  }

  let companyData=(e)=>{
    setCompany(e.target.value)
  }

  let navigate=useNavigate()

//I have two components. In first component I have one button. 
//On click of button I want to navigate to another component or another page.
//that why we can usenavigate and its need import 


let formhandle=()=>{
  let a={name,salary,company}

  //STEP=01
  //POST is used when we want to send data to a web address.(db.json)

//POST is different from PUT because it’s used to create new data entries at the destination,
// whereas PUT is meant to modify the same one (for example, in a database).
  axios.post("http://localhost:3000/users",a)
  .then(()=>{
    console.log("Data is has upload");
  })
  .catch(()=>{
    console.log("something is fisy");
  })
  navigate('/b')
}
  return (
    <div  id={css.form}>
     <article >
      <label htmlFor="">Name :</label>
      <input type="text" value={name} onChange={nameData}/> <br />
      <label htmlFor="">Salary :</label>
      <input type="text" value={salary} onChange={salaryData}/> <br />
      <label htmlFor="">Company :</label>
      <input type="text" value={company} onChange={companyData}/> <br />
 
      <button onClick={formhandle}>Submit</button>
     </article>
    </div>
  )
}

export default Createuser
