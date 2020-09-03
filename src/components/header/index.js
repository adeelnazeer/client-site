import React from 'react'
import { Link } from 'react-router-dom';
import Style from './style';
import Logo from '../../static/assets/images/uppereight.png';
import Main from '../../static/assets/images/logomain.png';
export default()=>{
    return(
        <>
        
        <div className="header-main d-flex">
        <div className="header-container container-fluid">
            <div className="header-subcontainer container">
                <div className="header-row d-flex justify-content-around">
                    <div className="header-txt">
                        
                       <Link to='/aboutus'>
                        <h4>ABOUT US</h4>
                        </Link>
                        
                    </div>
                    <div>
                       <Link to='/services'>
                        <h4>SERVICES</h4>
                        </Link>
                    </div>
                    <div className="header-img">
                        <Link to='/'>
                        <img className="upper" src={Logo} alt="Not Found"/>
                        <img className="lower" src={Main} alt="Not Found"/>
                        </Link>
                    </div>
                    <div>
                        <Link to='/portfolio'>
                        <h4>PORTFOLIO</h4>
                        </Link>
                    </div>
                    <div>
                        <Link to='/contact'>
                        <h4>CONTACT</h4>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <Style/>
        </>
    );
}