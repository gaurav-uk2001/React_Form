import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Read = () => {

  const [data, setdata] = useState([]);
  const history = useNavigate();

function getData() {
  axios.get(
    // can use apostrope('_') or backtick(`_`)
    'https://64da2ce1e947d30a260ae6c5.mockapi.io/React_Form_project'
    ).then((res)=>{
        console.log(res.data);
        setdata(res.data);
    })
}  

const deleteHandler = async(id)=>{
try {
  console.log(id);
  // can use only backtick while calling delete function
  await axios.delete(`https://64a67ac5096b3f0fcc7fdb58.mockapi.io/create_from/${id}`)
  .then(()=>{
    getData();
  })
}
catch (error) {
  console.log(error);
}
}


const editHandler = async(id,name,email)=>{
  try {
    const data = {id,name,email};
    await localStorage.setItem('myData',JSON.stringify(data));
    console.log(data);
    history("/Update");
  } catch (error) {
    console.log();
  }
}

useEffect(() => {
  getData();
}, [])


  return (
    <div>
      <h1 style={{textAlign:"center", paddingInline:"20vw"}}>READ FORM</h1>
      <button class="btn btn-info" style={{margin:"0 auto",display:"block"}} onClick={()=>{history("/");}}>Goto Create-Form Page</button>
      <br />
     <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope='col'>Edit</th>
      <th scope='col'>Delete</th>
    </tr>
  </thead>
    { data.map((eachData)=>{
      return(
        <>
              <tbody>
              <tr>
                <th scope="row">{eachData.id}</th>
                <td>{eachData.name}</td>
                <td>{eachData.email}</td>
                <td>
                  <button className='btn-success'onClick={()=>{editHandler(eachData.id, eachData.name, eachData.email)}}>Edit</button>
                  </td>
                  <td>
                  <button className='btn-danger' onClick={()=>{deleteHandler(eachData.id)}}>Delete</button>
                  </td>
              </tr>
            </tbody>
        </>
        )
        }
  )
    }
</table>
    </div>
  )
}

export default Read
