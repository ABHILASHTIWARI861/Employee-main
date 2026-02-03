import React, { useState,useEffect } from "react";
import Login from './components/Auth/Login';
import  EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { setLocalStorage,getLocalStorage } from "./utils/localStorage";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";

const App = () =>{

useEffect(function(){ // UseEffect side me ek function chalane ka kaam krta hai
  setLocalStorage();   // here this is the function ,jo chalega.
  // getLocalStorage();   //getLocalStorage() call was redundant since AuthProvider already does this and makes the data available through the context.
},[]) //very very importent either use it in AuthProvider or use here.



const[user,set_user]=useState(null);
const[logged_in_user,set_loggedInUser]=useState(null);
const [user_data,set_user_data]= useContext(AuthContext)




useEffect(()=>{
  const loggedInUser=localStorage.getItem('loggedInUser');
  if(loggedInUser){
    const UserData=JSON.parse(loggedInUser);
    set_user(UserData.role)
    set_loggedInUser(UserData.data);
  }
},[])



function handleLogin(email,password){

if(email=="Admin@123" && password==123){
  console.log("This is admin");
  set_user("admin");
  localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
  
}  
else if(user_data){
   const emp=user_data.find((e)=>
    e.email==email && e.password==password
  )
  if(emp){
  set_loggedInUser(emp);
  console.log(emp);
  console.log("This is User");
  localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:emp}))
  set_user("employee");
}
}
else{
  alert("stop...Invalid Credentials")
}
}



  return (
<div className="container">
  {!user?(<Login handle_Login={handleLogin}/>):(user=='admin'?<AdminDashboard change_user={set_user} />:<EmployeeDashboard change_user={set_user} data={logged_in_user}/>)}
  </div>

  );
}

export default App;
