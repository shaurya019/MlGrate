import React, { useEffect, useState } from 'react';
import { Navigate,useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Alert from 'react-bootstrap/Alert';
// import Button from 'react-bootstrap/Button';
import "./Login.css";

const baseURL = process.env.REACT_APP_API_KEY

const Loginpart = (props) => {
    const [userIn, setUserIn] = useState({ name: '', email: '', password: '' });
    const [userUp, setUserUp] = useState({ email: '', password: '' });
    const [errormsg, seterrormsg] = useState({title:'',msg:''});
    const [showerr,setshowerr] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        const signUpButton = document.getElementById("signUp");
        const signInButton = document.getElementById("signIn");
        const container = document.getElementById("container");

        signUpButton.addEventListener("click", () =>
            container.classList.add("right-panel-active")
        );

        signInButton.addEventListener("click", () =>
            container.classList.remove("right-panel-active")
        );
    })
    const handlesigninchange = (e) => {
        // setUserIn(()=>{..., e.target.name : e.target.value })
    }
    const handlesignupchange = (e) => {

    }
    const handlesignin = (e) => {
        e.preventDefault();
        Axios.get(baseURL+"/users/")
      .then((response) =>{
        // props.setisloaggedin(response.data);
        // console.log(response.data);
        props.handlelogin(response.data);
      })
      .catch(error => console.log(error));
      navigate('/');
    //   <Redirect to='/' />
    //    <Navigate to="/" replace />
      
    }
    const handlesignup = (e) => {
        // e.preventDefault();
        e.preventDefault();
        Axios.get(baseURL+"/users/")
      .then((response) =>{
        // props.setisloaggedin(response.data);
        // console.log(response.data);
        props.handlelogin(response.data);
      })
      .catch(error => console.log(error));
      Navigate('/');

    }

    if(props.isloaggedin){
        return <Navigate to='/AP' replace />
    }
    

    return (
        <>
        {showerr && 
        <Alert variant="danger" dismissible onClick={()=> setshowerr(false)}>
                <Alert.Heading>{errormsg.title}</Alert.Heading>
                <p>
                    {errormsg.msg}
                </p>
        </Alert>
        }
        <div className="container" id="container">
            <div class="form-container sign-up-container">
                <form onSubmit={handlesignup}>
                    
                    <h1 className='h1'>Create Account</h1>
                    <div className="social-container">
                        <a href="#" className="social-f"></a>
                        <a href="#" className="social-g"></a>
                        <a href="#" className="social-gi"></a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name"  name='name' onChange={handlesigninchange} />
                    <input type="email" placeholder="Email"  name='email' onChange={handlesigninchange} />
                    <input type="password" placeholder="Password" name='password' onChange={handlesigninchange} />
                    <button className="btn-form" onClick={handlesignup}>Sign Up</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form onSubmit={handlesignin}>
                    <h1 className='h1'>Sign in</h1>
                    <div className="social-container">
                        <a href="#" className="social-f"></a>
                        <a href="#" className="social-g"></a>
                        <a href="#" className="social-gi"></a>
                    </div>
                    <span>or use your account</span>
                    <input type="email" placeholder="Email"  name='email' onChange={handlesignupchange} />
                    <input type="password" placeholder="Password" name='password' onChange={handlesignupchange} />
                    <a className="forget" href="#">Forgot your password?</a>
                    <button className="btn-form" onClick={handlesignin}>Sign In</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1 >Welcome Back!</h1>
                        <p className='p'>To keep connected with us please login with your personal info</p>
                        <button className="btn-form ghost" id="signIn">Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1 className='h1'>Hello, Friend!</h1>
                        <p className='p'>Enter your personal details and start journey with us</p>
                        <button className="btn-form ghost" id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>

        </div>
        </>
    );
};

export default Loginpart;