import React from 'react';
import './homepage.css'
function Homepage(){
    return(
        <div className="maindiv">

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
                    <div className="dress">
                        <h3 className="Dress">Dress Color</h3>
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

            <div>
                <div>
                    <img className="slide"src="slide.jpg" alt="error" />
                </div>
            </div>
            <div className="images">

                <div className="womendiv">
                    <img  className="womenwear" src="women.jpg" alt="error" />
                    <div>
                      <h2 className="div">Women</h2>
                    </div>
                </div>

                <div className="mendiv">
                    <img  className="menwear" src="menwear.jpg" alt="error" />
                    <div>
                      <h2 className="div">Men</h2>
                    </div>
                </div>

                <div className="kidsdiv">
                    <img className="kidswear" src="kids.jpg" alt="error" />
                    <div>
                      <h2 className="div">Kids</h2>
                    </div>
                </div>

                <div className="footweardiv">
                    <img className="footwear" src="footwear.jpg" alt="error" />
                    <div>
                      <h2 className="div">Sneakers</h2>
                    </div>
                </div>

                <div className="newarrivalsdiv">
                    <img className="newarrivals" src="new.webp" alt="error" />
                    <div>
                      <h2 className="div">New arrivals</h2>
                    </div>
                </div>

                <div className="traditionaldiv">
                    <img className="traditional" src="indian.jpg" alt="error" />
                    <div>
                      <h2 className="div">Traditional</h2>
                    </div>
                </div>
            </div>

            <div className="imagediv">

                <div className="imagesdiv">
                    <div className="bridediv">
                        <img className="bride Hover" src="bride.jpg" alt="error"/>
                    </div>

                    <div className="suitediv">
                        <img className="suite Hover" src="menwear.jpeg" alt="error"/>
                    </div>

                    <div className="Dressesdiv">
                        <img className="Dresses Hover"src="dress.jpeg" alt="error"/>
                    </div>

                    <div className="westerndiv">
                        <img className="western Hover"src="western.jpeg" alt="error"/>
                    </div>
                </div>


                <div className="accessories">
                    <div className="banglediv">
                        <img className="bangles Hover" src="bangles.jpeg" alt="error" />
                    </div>
                    <div className="earRingdiv">
                        <img className="earRing Hover" src="earRing.jpeg" alt="error" />
                    </div>
                    <div className="bagdiv">
                        <img className="bag Hover" src="bag.jpeg" alt="error" />
                    </div>
                    <div className="ringdiv">
                        <img className="ring Hover" src="ring.jpeg" alt="error" />
                    </div>
                </div>

                <div className="last">
                    <div className="frackdiv">
                        <img  className="frack Hover" src="kidsfrack.jpg" alt="error"/>
                    </div>
                    <div className="necklacediv">
                        <img className="necklace Hover"  src="necklace.jpg" alt="error"/>
                    </div>
                    <div className="snikerdiv">
                        <img className="sniker Hover" src="snikers.jpeg" alt="error"/>
                    </div>
                    <div className="watchdiv">
                        <img className="watch Hover" src="watches.jpeg" alt="error"/>
                    </div>
                </div>

            </div>

            <div className="skinheading">
                <div>
                    <h4>choose the outfits for your</h4>
                    <h2 className="skintone">Skintone</h2>
                </div>
            </div>

            <div>
                
            </div>

        </div>
    )
}
export default Homepage