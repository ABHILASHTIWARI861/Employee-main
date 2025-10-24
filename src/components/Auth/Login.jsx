import React, { useState } from "react";




function Login({handle_Login}){
    const[email,set_email]=useState("");
    const[password,set_password]=useState("");

    function submitted(e){
        e.preventDefault();

        handle_Login(email,password);
        set_email("");
        set_password("");
       
    }


    function mail_id(e){
     const val=e.target.value;
     console.log(val);
     set_email(val);
    }

    function pwd(e){
        const val1=e.target.value;
        console.log(val1);
        set_password(val1);
    }


  return (
    <div className="Box_login">
      <form onSubmit={submitted} className="form_class">
        <input value={email} onChange={mail_id} type="email" placeholder="Username" required className="input_class"/>
        <input value={password} onChange={pwd} type="password" placeholder="Password" required className="input_class"/>
        <button type="submit" className="button_class">Login</button>
      </form>
    </div>

  );
}

export default Login;

