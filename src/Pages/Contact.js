import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/Actions/contactActions";

const Contact = () => {
  const [contact,setContact]=useState({Fname:'',
  lname:'',email:'',birthday:'' ,password:''
})
const [checkEmail,setCheckEmail]=useState('')
const [checkPassword,setCheckPassword]=useState('')
  const dispatch=useDispatch()
  const handleChange=(e)=>
  {
 
   
   
    setContact(
      {
        ...contact,
        [e.target.name]:e.target.value
      }
    )
  }

  const submitIt=()=>{

    var email =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   var pass = /^[a-zA-Z0-9\-\_\/\s,.]+$/
    if(contact.email !== email ){
      setCheckEmail('please put the right email')
    }else if( contact.password != pass){
       setCheckPassword('password should be over 8 character')
       console.log(checkPassword ,'contact.password.length')

    }
 else{
      return  dispatch(addContact(contact))}
  }
  console.log(contact)
  return (
    <div className="ContactContent">
      <h1>you can reach out to us:</h1>
      <p>mail contact : ghassenmansouri@mail.com</p>
      <p>mobile : +216.22.486.111</p>

     
        <legend>Or leave us your details and we will reach out !</legend>
        <div>
          <label htmlFor="fname">First name:</label>
          <input
            type="text"
            id="Fname"
            name="Fname"
            placeholder="Type your Name Here"
            onChange={handleChange}
            min=''
          />
        </div>
        <div>
          <label htmlFor="lname">Last name:</label>
          <input
            type="text"
            id="lname"
            name="lname"
            placeholder="Type your Last Name Here"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Type your Email Here"
            onChange={handleChange}
          />
          {checkEmail}
        </div>
        <div>
          <label htmlFor="password">password:</label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Type your password Here"
            onChange={handleChange}
     
          />
{checkPassword}
        </div>
        <div>
          <label htmlFor="birthday">Birthday:</label>
          <input type="date" id="birthday" name="birthday" onChange={handleChange}/>
        </div>

        <input type="submit" value="Submit Answer" onClick={()=>submitIt()} />
     
    </div>
  );
};

export default Contact;
