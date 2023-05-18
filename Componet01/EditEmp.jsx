import React, { useState } from 'react'
import css from './menu.module.css'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const EditEmp = () => {
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
   let sharan=useNavigate()


  let formhadle=()=>{
    let payload={name,account,bank}
    axios.put(`http://localhost:3000/users/${ranga}`,payload)
    window.location.assign('/b')
    .then(()=>{
      console.log("got the out put");
    })
    .catch(()=>{
      console.log("something is fisy");
    })
    sharan('/b')

  }






  
  let {ranga} =useParams()
  console.log(ranga);

  useEffect(()=>{

    
     
    axios.get(`http://localhost:3000/users/${ranga}`)
    .then((response)=>{
      console.log("got the data");
      console.log(response.data);
      setName(response.data.name)
      setAccount(response.data.account)
      setBank(response.data.bank)
    })
    .catch(()=>{
      console.log("something is fisy");
    })
   
    
  },[])

  return (
    <div>
      <div  id={css.form}>
     <article >
        <h1>Update-Emplye Details</h1>
        <br />
      <label htmlFor="">Employe Name  :</label>
      <input type="text" value={name} onChange={nameData}/> <br />
      <label htmlFor="">Account No  :</label>
      <input type="text" value={account} onChange={accountData}/> <br />
      <label htmlFor="">Bank NAME :</label>
      <input type="text" value={bank} onChange={bankData}/> <br />
 
      <button onClick={formhadle}>Submit</button>
     </article>
    </div>
    </div>
  )
}

export default EditEmp
