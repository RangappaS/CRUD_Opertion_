import React, { useState } from 'react'
import css from './home.module.css'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Edituser = () => {
  let [name,setName]=useState("")
  let [salary,setSalary]=useState("")
  let [company,setCompany]=useState("")

  let nameData=(e)=>{
    setName(e.target.value)
  }

  let salaryData=(e)=>{
    setSalary(e.target.value)
  }

  let companyData=(e)=>{
    setCompany(e.target.value)
  }

   let sharan=useNavigate()

//STEP=04
//its is edit after the put it on the database that time we use put method 

  let formhadle=()=>{
    let payload={name,salary,company}
    axios.put(`http://localhost:3000/users/${index}`,payload)
    window.location.assign('/b')
    .then(()=>{
      console.log("got the out put");
    })
    .catch(()=>{
      console.log("something is fisy");
    })
    sharan('/b')

  }






  //Its is coming in below it is whenever we want the edit the one user and it should be coming in the presnet in the user we can use here get method 

  // STEP=03
  let {index} =useParams()//In our React app sometimes we want to access the parameters 
  //of the current route in this case useParams hook comes into action.
  // The react-router-dom package has useParams hooks that let you access the parameters of the current route.
  console.log(index);

  useEffect(()=>{

    
    //To use get method in axios, we use axios.get() which takes a mandatory argument (URL). 
    //Axios is pretty different than fetch, 
    axios.get(`http://localhost:3000/users/${index}`)
    .then((response)=>{
      console.log("got the data");
      console.log(response.data);
      setName(response.data.name)
      setSalary(response.data.salary)
      setCompany(response.data.company)
    })
    .catch(()=>{
      console.log("something is fisy");
    })
   
    
  },[])

  return (
    <div>
      <div  id={css.form}>
     <article >
        <h1>Update-User</h1>
        <br />
      <label htmlFor="">Name :</label>
      <input type="text" value={name} onChange={nameData}/> <br />
      <label htmlFor="">Salary :</label>
      <input type="text" value={salary} onChange={salaryData}/> <br />
      <label htmlFor="">Company :</label>
      <input type="text" value={company} onChange={companyData}/> <br />
 
      <button onClick={formhadle}>Submit</button>
     </article>
    </div>
    </div>
  )
}

export default Edituser
