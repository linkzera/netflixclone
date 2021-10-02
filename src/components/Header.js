import React from "react";
import './Header.css'

export default () => {
    return(
        <header>
            <div className="header--logo">
                <a href="/">
                    <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="logo"></img>
                </a>
            </div>

            <div className="header--user">
                <a href="/">
                    <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png' alt='user-logo'></img>    
                </a>    
                
            </div>        
        </header>
    )
}