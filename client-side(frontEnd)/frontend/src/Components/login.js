import React from 'react';
import './login.css';
import { useState } from 'react';
function Login() {
    const [userName, setUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    function buttonClick(){
        if(userName=="" || loginPassword==""){
             alert("fill your login details")
        }
        else{
            let login=JSON.parse(localStorage.getItem("signup"))||[];
            for(let i=0;i<login.length;i++){
                if(login[i].user==userName && login[i].password==loginPassword){
                    alert("login successfull")
                    localStorage.setItem("Newdata",JSON.stringify(login[i]));
                }
                else{
                    alert("user not exixt")
                }
            }
        }

    }
    return (
        <div className="maindiv">
            <div className="container">
                <div className="logo">
                    <img className="image" src="beauty.jpg" />
                </div>

                
                <h2 className="username">User Name :</h2>
                <input type="text" className="inputtag username" onChange={e => setUsername(e.target.value)} placeholder="last name" />

                <h2 className="password">Password :</h2>
                <input type="password" className="inputtag loginPassword" onChange={e => setLoginPassword(e.target.value)} placeholder="password" />

                <div>
                    <button className="button" onClick={buttonClick}>Login</button>
                </div>

                <div className="textDiv">
                   <div className="forgot">
                       <h4>forgot password</h4>
                   </div>
                   <div className="account">
                       <h4>Don't have an account ?<br></br> Signup</h4>
                   </div>
                </div>

                <div className="logoimages">
                    <div className="googlediv">
                    <a href="https://www.google.co.in/webhp"><img className="google" src="google.jpeg" /></a>
                    </div>
                    <div className="facebookdiv">
                    <a href="https://www.facebook.com/"><img className="facebook" src="facebook.jpeg" /></a>
                    </div>
                    <div className="maildiv">
                        <img className="mail" src="email.jpeg" />
                    </div>
                    <div className="twiterdiv">
                    <a href="https://twitter.com/?lang=en-in"><img className="twiter" src="twiter.jpeg" /></a>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Login