import React from 'react';

const UserInfo = (props) => {
  return (
    <>    
    <div>First Name: {props.fname}</div>
    <div>Last Name: {props.lname}</div>
    <div>Email Address: {props.email}</div>
    <div>Phone Number: {props.phone}</div>
    </>
  )
}

export default UserInfo