import React from 'react';
import './form.css';
function Form(){
    return(
        <div>



            <div className='formdiv'>

               <div className='form-animation'>
                     <bink className="blinkform">BEAUTYSPY</bink>

                     <div>
                         <img className="formimg"src="beauty.jpg"/>
                     </div>
                     <marquee direction="left" className="formmarquee">
                        <h3 className='marquetext'> Explore outfits and makeup for your skin tone</h3>
                    </marquee> 

               </div>

            </div>



        </div>
    )
}
export default Form