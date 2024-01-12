import React from 'react'
import { contacttype } from './types/contacttypes'

function Displaycontact(props:{contactData:contacttype[]}) {
  return (
    <div>
    <table>
      <tr>
        <th> name</th>
        <th>lastname</th>
        <th>phone</th>
     <th>email </th>
    <th> password</th>
     <th>address</th>
     <th>postelcode</th>
    <th>message </th>
     <th>city</th>
     </tr>
      {props.contactData.map((item,index)=>{
       return(
        <tr key={index}>
          <td>{item.name}</td>
          <td>{item.lastname}</td>
          <td>{item.phone}</td>
          <td>{item.email}</td>
          <td>{item.password}</td>
          <td>{item.address}</td>
          <td>{item.postelcode}</td>
          <td>{item.message}</td>
          <td>{item.city}</td>
          </tr>
        
       )
      })}
    </table>
     </div>
  )}
  


export default Displaycontact