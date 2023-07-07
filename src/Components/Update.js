import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Update = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');

    const history = useNavigate();

  useEffect(() => {
    const retrieveData = () => {
      const data = localStorage.getItem('myData');
      return JSON.parse(data);
    };

    const retrievedData = retrieveData();
    if (retrievedData) {
      setName(retrievedData.name);
      setEmail(retrievedData.email);
      setId(retrievedData.id);
    }
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const editElement = async (newId, newName, newEmail) => {
    try {
      await axios.put(`https://64a67ac5096b3f0fcc7fdb58.mockapi.io/create_from/${newId}`, {
        name: newName,
        email: newEmail,
      }).then(()=>{
        history("/Read");
    })
      alert('Element updated successfully');
    }
     catch (error) {
      console.log('Error updating element:', error);
    }
  };

  const handleUpdate = () => {
    editElement(id, name, email);
  };

  return (
    <>
      <h1 style={{ textAlign: "center", paddingInline: "20vw" }}>UPDATE FORM</h1>
      <button class="btn btn-info" style={{margin:"0 auto",display:"block"}} onClick={()=>{history("/Read");}}>Goto Read-Form Page</button>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" id="exampleInputPassword1" onChange={handleNameChange} value={name} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" onChange={handleEmailChange} value={email} />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleUpdate}>Update</button>
      </form>
    </>
  );
};

export default Update;
