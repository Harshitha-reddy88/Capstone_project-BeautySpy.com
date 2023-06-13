import React from 'react';
import './homepage.css';
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

            <h2 className="differentOutfits">Different Outfits</h2>

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

            <div className="skintones">

                <div className="alabaster boxradius">
                   <img className="unique" src="alabaster.png" alt='error'/> 
                   <h3>Alabaster</h3>
                </div>

                <div className="skintone2 boxradius">
                   <img className="unique" src="skintone2.png" alt='error' /> 
                   <h3>Pale</h3>
                </div>

                <div className="skintone3 boxradius">
                   <img className="unique" src="skintone3.png" alt='error'/> 
                   <h3>Rosy-Pale</h3>
                </div>

                <div className="skintone4 boxradius">
                   <img className="unique" src="skintone4.png" alt='error'/> 
                   <h3>light</h3>
                </div>

                <div className="skintone5 boxradius">
                   <img className="unique" src="skintone5.png" alt='error'/> 
                   <h3>Carotenoid</h3>
                </div>

                <div className="skintone6 boxradius">
                   <img className="unique" src="skintone6.png" alt='error' /> 
                   <h3>Tan</h3>
                </div>

                <div className="skintone7 boxradius">
                   <img className="unique" src="skintone7.png"  alt='error'/> 
                   <h3>Espresso Brown</h3>
                </div>

                <div className="beige boxradius">
                   <img className="unique" src="beige.png" alt='error'/> 
                   <h3>Beige</h3>
                </div>

            </div>

           <h2 className='cosmet'>Cosmetics</h2>

            <div className='cosmeticsdiv'>
                  <div className='cosmetic makup1'>
                    <img className="makup" src="cosmetics.jpeg" alt='error'/>
                  </div>
                  <div className='cosmetic makup2'>
                    <img className="makup" src="kajal.jpeg" alt='error'/>
                  </div>
                  <div className='cosmetic makup2'>
                    <img className="makup" src="makeuproducts.jpeg" alt='error'/>
                  </div>

                   <div className='cosmetic makup2'>
                       <img className="makup" src="lipstick.jpeg" alt='error'/>
                   </div>
            </div>

            <div className='cosmeticsdiv1'>
                <div className='cosmetics makup2'>
                    <img className="makup makupleft" src="makeupwomen.jpg" alt="error"/>
                </div>
                <div className='cosmetic makup2'>
                    <img className="makup" src="makeupbrush.jpeg" alt="error"/>
                </div>
                <div className='cosmetic makup2'>
                    <img className="makup" src="womenlipstick.webp" alt="error"/>
                </div>
            </div>

            <div className='cosmeticsdiv'>
                  <div className='cosmetic makup1'>
                    <img className="makup" src="mac.jpeg" alt='error'/>
                  </div>
                  <div className='cosmetic makup2'>
                    <img className="makup" src="blusher.jpg" alt='error'/>
                  </div>
                  <div className='cosmetic makup2'>
                    <img className="makup" src="liquidblush.jpg" alt='error'/>
                  </div>

                   <div className='cosmetic makup2'>
                       <img className="makup" src="liquidmakeup.jpeg" alt='error'/>
                   </div>
            </div>

            <div className='footer'>
                <div className='who'>
                    <h3 className='pinkcolor'>Who are we ?</h3>
                    <p className='pinkcolor'>About us</p>
                </div>
                <div  className='womenFooter'>
                    <h4 className='pinkcolor'>Women</h4>
                    <p className='pinkcolor'>Traditional</p>
                    <p className='pinkcolor'>Western</p>
                    <p className='pinkcolor'>Bags</p>
                    <p className='pinkcolor'>Foot wear</p>
                    <p className='pinkcolor'>Jewellery</p>
                    <p className='pinkcolor'>Watches</p>
                    <p className='pinkcolor'>Accessories</p>
                </div>
                <div className='menFooter'>
                    <h4 className='pinkcolor'>Men</h4>
                    <p className='pinkcolor'>Traditional</p>
                    <p className='pinkcolor'>Western</p>
                    <p className='pinkcolor'>Foot wear</p>
                    <p className='pinkcolor'>Watches</p>
                    <p className='pinkcolor'>Accessories</p>
                </div>
                <div className='kidsFooter'>
                    <h4 className='pinkcolor'>Kids</h4>
                    <p className='pinkcolor'>Traditional</p>
                    <p className='pinkcolor'>Western</p>
                    <p className='pinkcolor'>Foot wear</p>
                    <p className='pinkcolor'>Jewellery</p>
                    <p className='pinkcolor'>Accessories</p>
                </div>
                <div className='skintoneFooter'>
                    <h4 className='pinkcolor'>Skintone</h4>
                    <p className='pinkcolor'>Alabaster</p>
                    <p className='pinkcolor'>Beige</p>
                    <p className='pinkcolor'>Carotenoid</p>
                    <p className='pinkcolor'>Tan</p>
                    <p className='pinkcolor'>light</p>
                    <p className='pinkcolor'>Pale</p>
                </div>

                <div>
                   <h4 className='followus pinkcolor'>Follow us</h4>

                   <div className='footers'>

                     <div>
                      <img className="footerimages footergap1" src="footerinsta.jpg" alt="error" />
                     </div>

                     <div>
                      <img className="footerimages footergap" src="footerTwitter.png" alt="error" />
                     </div>

                     <div>
                      <img className="footerimages footergap" src="footerfacebook.png" alt="error" />
                     </div>

                   </div>

                </div>

            </div>

        </div>
    )
}
export default Homepage