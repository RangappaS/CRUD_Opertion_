
import React, { useState } from 'react'
import css from './menu.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const CreateEmp = () => {
    let[name,setName]=useState(" ")
  let[account,setAccount]=useState(" ")
  let[bank,setBank]=useState( " ")

  let nameData=(e)=>{
    setName(e.target.value)
  }

  let accountData=(e)=>{
    setAccount(e.target.value)
  }

  let bankData=(e)=>{
    setBank(e.target.value)
  }

  let navigate=useNavigate()




let formhandle=()=>{
  let a={name,account,bank}

  
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
      <label htmlFor="">Employe Name :</label>
      <input type="text" value={name} onChange={nameData}/> <br />
      <label htmlFor="">Account No :</label>
      <input type="text" value={account} onChange={accountData}/> <br />
      <label htmlFor="">Bank name :</label>
      <input type="text" value={bank} onChange={bankData}/> <br />
 
      <button onClick={formhandle}>Submit</button>
     </article>
    </div>
  )
}

export default CreateEmp
