import React from 'react';
import './homepage.css';
function Women(){
    return(
        <div>
            <nav className="navbar">
                <div className="navbar">

                    <div>
                        <img  className="logo" src="beauty.jpg" alt="error"/>
                    </div>
                    <div className="women">
                        <h3 className="Women">Women</h3>
                    </div>
                    <div className="men">
                        <h3 className="Men">Men</h3>
                    </div>
                    <div className="kids">
                        <h3 className="Kids">Kids</h3>
                    </div>
                    <div className="skin">
                        <h3 className="Skintone">Skintone</h3>
                    </div>
                    <div>
                        <input  className="search" type="text" placeholder="search"/>
                    </div>
                </div>

                <div className="details">

                    <div className="accountdiv">
                        <div>
                            <img  className="contact" src="contact1.jpeg" alt="error"/>
                        </div>
                        <div>
                            <h3 className="account">Signup</h3>
                        </div>
                    </div>
                    
                    <div className= "wishlistdiv">
                        <div>
                            <img className="wish" src="wishlist.jpeg" error="" />
                        </div>
                        <div>
                            <h3 className="Wishlist">Wishlist</h3>
                        </div>
                    </div>

                </div>

            </nav>

            

        </div>
    )
}
export default Women;