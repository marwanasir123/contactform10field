"use client"
import React, { useState } from 'react'
import styles from "@/contactForm.module.css"
import Displaycontact from '@/displaycontact'
import * as yup from "yup"
import { contacttype, onChangeEventHandler } from '@/types/contacttypes'

function Contactvlidation() {
  const[contactInfo,setcontactInfo]=useState<contacttype>({
    name:"",
    lastname:"",
    phone:0,
    email:"",
    password:"",
    address:"",
    postelcode:"",
    message:"",
    city:""
  })
  const [errors,seterror]=useState<string[]>([])
  const contactobjectschema= yup.object().shape({
    name:yup.string().min(5).max(10).required(),
    lastname:yup.string().required(),
    phone:yup.string().matches(/^\+?[0-9]{1,4}[-. ]?\(?[0-9]{1,}\)?[-. ]?[0-9]{1,}[-. ]?[0-9]{1,}$/, 'Invalid phone number'),
    email:yup.string().email().required("please enter your email"),
    password:yup.string().min(8,"password must be atleast 8 characters").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, 'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character'),
    address:yup.string().required(),
    postelcode:yup.string(),
    message:yup.string().required(),
    city:yup.string().required()
  });
  const[contactList,setcontactList]=useState<contacttype[]>([])
  const onChangeHandler=(e:onChangeEventHandler)=>{
    let userDetails={
        ...contactInfo,
       [e.target.name]:e.target.value 
    }
    setcontactInfo(userDetails)
  }
  
  const onClickHnadler= async()=>{
      try{
    const result = await contactobjectschema.validate(contactInfo,{abortEarly:false})
   
       
    let newContactList:contacttype[]=[...contactList,contactInfo]
        setcontactList(newContactList)
        setcontactInfo({
          name:"",
         lastname:"",
         phone:0,
          email:"",
         password:"",
         address:"",
        postelcode:"",
       message:"",
       city:""
         })
      }
     catch(err:any){
      seterror(err.errors)
     }
  }
  return (
    <>
<div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
          Name
        </label>
        <input
          value={contactInfo.name}
          onChange={onChangeHandler}
          type="text"
          id="name"
          name="name"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor=" last name" className="block text-gray-700 text-sm font-bold mb-2">
          Last Name
        </label>
        <input
          value={contactInfo.lastname}
          onChange={onChangeHandler}
          type="text"
          id="lastname"
          name="lastname"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
          Phone no
        </label>
        <input
          value={contactInfo.phone}
          onChange={onChangeHandler}
          type="text"
          id="number"
          name="phone"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
       <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          value={contactInfo.email}
          onChange={onChangeHandler}
          type="email"
          id="email"
          name="email"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
         
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
          Password
        </label>
        <input
          value={contactInfo.password}
          onChange={onChangeHandler}
          type="password"
          id="password"
          name="password"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
          Address
        </label>
        <input
          value={contactInfo.address}
          onChange={onChangeHandler}
          type="text"
          id="address"
          name="address"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
      <label htmlFor="postalCode">Postal Code:</label>
    <input 
    
    onChange={onChangeHandler}
    type="text" 
    id="postalcode"
     name="postalcode" 
     placeholder="Enter your postal code">
      </input>
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
          Message
        </label>
        <textarea
         value={contactInfo.message}
         onChange={onChangeHandler}
          id="message"
          name="message"
          rows={4}
          className="w-full px-3 py-2 border rounded-md"
          required
        ></textarea>
      </div>   
        <div className="mb-4">
        <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">
          City
        </label>
        <input
          value={contactInfo.city}
          onChange={onChangeHandler}
          type="text"
          id="city"
          name="city"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      {errors.map((item, index)=>{
          return (
            <div key={index} style={{color:"red"}}>
              <h6>{item}</h6>
            </div>
          )
        })}
      <div className="mb-6">
        <button
          onClick={onClickHnadler}
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    <Displaycontact contactData={contactList}/>
    </>
  )
}
export default Contactvlidation
