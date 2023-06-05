import React from 'react';
import './login.css';
import { useState } from 'react';
function Login() {
    const [username, setUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    function buttonClick(){
        if(username!=="" || loginPassword!==""){
             
        }
    }
    return (
        <div className="maindiv">
            <div className="container">
                <div className="logo">
                    <img className="image" src="beauty.jpg" />
                </div>

                
                <h2 className="heading1">User Name :</h2>
                <input type="text" className="inputtag username" onChange={e => setUsername(e.target.value)} placeholder="last name" />

                <h2 className="heading2">Password :</h2>
                <input type="password" className="inputtag loginPassword" onChange={e => setLoginPassword(e.target.value)} placeholder="password" />

                <div>
                    <button className="button" onClick={buttonClick}>Login</button>
                </div>
                <h4>Don't have an account ? Signup</h4>

                <div className="logoimages">
                    <div className="googlediv">
                        <img className="google" src="google.jpeg" />
                    </div>
                    <div className="facebookdiv">
                        <img className="facebook" src="facebook.jpeg" />
                    </div>
                    <div className="maildiv">
                        <img className="mail" src="email.jpeg" />
                    </div>
                    <div className="twiterdiv">
                        <img className="twiter" src="twiter.jpeg" />
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Login