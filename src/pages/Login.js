import React from 'react'
import Loginpart from "../components/Login/Loginpart"

const Login = (props) => {
  const {handlelogin} = props;
return (
         <div className="Login-part">
           <Loginpart isloggedin={props.isloggedin} handlelogin={handlelogin}/>
         </div>   
  );
};








export default Login;



  

