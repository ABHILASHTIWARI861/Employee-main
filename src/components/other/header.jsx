import React from "react";

function Header(props){

  console.log(props);

function logOut(){
    localStorage.setItem('loggedInUser','')
    props.change_user('');
}

    return(
        <div className="Box-Header">
        <div className="Header">
        <h2>Hello</h2> 
        <h1>{props.data?props.data.firstname : 'Admin'} ✌️</h1>
        </div>
        <button 
            style={{
            color:"white",
            backgroundColor:"rgb(239, 83, 80)",
            width:"80px",
            height:"40px",
            border:"none",
            borderRadius:'12px',
            cursor: 'pointer'
            }} onClick={logOut}>Log Out</button>
        </div>
    )
}
export default Header;