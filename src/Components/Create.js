import React from 'react'
import { useState } from 'react';
import axios from 'axios';

//to navigate or move to read page after submit 
// but before this achieve routing first
import { useNavigate } from "react-router";

const Create = () => {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const history = useNavigate();

    const onSubmit = async(e)=>{
      e.preventDefault();
      try {
                const res = await axios.post('https://64a67ac5096b3f0fcc7fdb58.mockapi.io/create_from',
                {
                  name:Name,email:Email
                }).then(()=>{
                  history("/Read");
                })       
      } catch (error) {

                console.log(error);

      }
    }
  return (
    <>
      <h1 style={{textAlign:"center", paddingInline:"20vw"}}>CREATE FORM</h1>
      <button class="btn btn-info" style={{margin:"0 auto",display:"block"}} onClick={()=>{history("/Read");}}>Goto Read-Form Page</button>
    <form>
  <div className="mb-3">
    <label  className="form-label" >Name</label>
    <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e)=>{setName(e.target.value)}}/>
  </div>
  <div className="mb-3">
    <label  className="form-label" >Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" onChange={(e)=>{setEmail(e.target.value)}}/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
  {/* <h1>Name:{Name}</h1>
  <h1>Email:{Email}</h1> */}
</form>
    </>
  );
}

export default Create;