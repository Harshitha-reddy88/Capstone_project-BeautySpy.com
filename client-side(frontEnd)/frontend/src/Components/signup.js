import React from 'react';
import './signup.css';
import { useState } from 'react';
function Signup() {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    function buttonClick() {
        // let project=[{"FirstName":first},
        //                {"LastName":last},
        //                {"Password":password},
        //                {"Phone":phone},
        //                {"Email":email}]
        // if(first=="" || last=="" || password=="" || phone=="" || email==""){
        //     alert("please fill the details")
        // }
        if (first !== "" && last !== "" || password !== "" || phone !== "" || email !== "") {

            let signupdetails = JSON.parse(localStorage.getItem("signup")) || [];
            localStorage.setItem("signup", JSON.stringify([...signupdetails, { first, last, password, phone, email }]));
        }
        else {
            alert("fill")
        }
    }
    return (
        <div className="maindiv">
            <div className="container">
                <div className="logo">
                    <img className="image" src="beauty.jpg" />
                </div>

                <h2 className="heading">Full Name :</h2>
                <input type="text" className="inputtag first" onChange={e => setFirst(e.target.value)} placeholder="first name" />

                <h2 className="heading1">User Name :</h2>
                <input type="text" className="inputtag last" onChange={e => setLast(e.target.value)} placeholder="last name" />

                <h2 className="heading2">Password :</h2>
                <input type="password" className="inputtag password" onChange={e => setPassword(e.target.value)} placeholder="password" />

                <h2 className="heading3">Phone Number :</h2>
                <input type="number" className="inputtag phone" onChange={e => setPhone(e.target.value)} placeholder="phone number" />

                <h2 className="heading4">email</h2>
                <input type="email" className="inputtag email" onChange={e => setEmail(e.target.value)} placeholder="email" />
                <div>
                    <button className="button" onClick={buttonClick}>Signup</button>
                </div>
                <h4>already have an account ? login</h4>

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
export default Signup