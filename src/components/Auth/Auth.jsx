import React, { useEffect } from 'react'
import { useState } from 'react';
const Auth = ({onSubmit,resetForm }) => {
  console.log(resetForm)

  const [formDetails, setFormDetails] = useState({email: '', password: '', username: '', isLoading: false});

  function updateEmail(updatedEmail) {
      setFormDetails({...formDetails, email: updatedEmail});
  }

  function updatePassword(updatedPassword) {
      setFormDetails({...formDetails, password: updatedPassword});
  }

  function updateUsername(updateUsername) {
      setFormDetails({...formDetails, username: updateUsername});
  }

  function onFormSubmit() {
      setFormDetails({...formDetails, isLoading: true});
      onSubmit(formDetails);
  }

  
  useEffect(()=>{
    setFormDetails({email: '', password: '', username: '', isLoading: false});

  },[resetForm])
  return (
    <>
       
        <div className="input-group">
          <input
          onChange={(e)=>updateUsername(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Username"
            id="loginUsername"
          />
        </div>
      
      <div className="input-group">
        <input
        onChange={(e)=>{
          return updateEmail(e.target.value)

        }}
          type="email"
          className="form-control"
          placeholder="Email"
          id="loginUserEmail"
        />
      </div>
      <div className="input-group">
        <input
        onChange={(e)=>{
          return updatePassword(e.target.value)
        }}
          type="password"
          className="form-control"
          placeholder="Password"
          id="loginPassword"
        />
      </div>
      <div className="input-group">

        <button onClick={onFormSubmit} className="btn btn-primary form-control" type="button" disabled={formDetails.isLoading}>
        {formDetails.isLoading&&  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
          {(formDetails.isLoading)?'Loading...':'Submit'}
        </button>
      </div>
    </>
  )
}

export default Auth;
