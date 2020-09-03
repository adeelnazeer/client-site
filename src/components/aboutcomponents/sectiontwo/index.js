import React from 'react'
import Style from './style'
import Image from '../../../static/assets/images/imagetwo.jpg'
export default ()=>{
    return(
        <>
        <div className="aboutsecttwo-container container-fluid">
            <div className="aboutsecttwo-subcontainer container">
                <div className="aboutsecttwo-row d-flex justify-content-between">
                    <div className="aboutsecttwo-col-one">
                        <img src={Image} alt="Not Found"/>
                    </div>
                    <div className="aboutsecttwo-col-two">
                        <p>NYRa Investments is a wholly black owned and controlled investment holdings company that was established for the purposes of accelerating employment opportunities that are presented by startup companies in South Africa. It is for this purpose that we target high potential Start-up and SMME’s, typically in labour intensive industries, wherein we add value in exchange for interest and influence proportional to our investment.
                        </p>
                        <p>
                        We invest in people, people who are not only very good at what they do, but as conscious and passionate about sustainable and socio-economical business practices as we are. It is through this philosophy that we believe that our impact will be far reaching. We will achieve this through a specific focus on providing support for any barriers of advancement typical in the start-up and SMME landscape.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <Style/>
        </>
    );
}