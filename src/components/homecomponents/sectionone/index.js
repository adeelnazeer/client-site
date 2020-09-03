import React from 'react';
import Style from './style';
import Image from '../../../static/assets/images/image.png';
export default()=>{
    return(
        <>
        <div className="homesectone-main d-flex">
            <div className="homesectone-container container-fluid">
                <div className="homesectone-subcontainer container">
                    <div className="homesectone-row d-flex justify-content-between">
                        <div className="homesectone-text">
                            <h1><span className="txtone">ENABLING</span><span className="txttwo">GROWTH</span></h1>
                            <hr></hr>
                            <h1 className="txtthree">DELIVERING VALUE</h1>
                            <div>
                            <p>
                            We are a team of entrepreneurs with expertise in growth strategies, seeking to invest in and 
                            accelerate high potential Start-ups and SMMEs
                            </p>
                            </div>
                            
                        </div>
                        <div className="homesectone-image">
                            <img src={Image} alt="Not Found"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Style/>
        </>
    );
}