import React from 'react'
import Style from './style'
import Funding from '../../../static/assets/images/funding.png'
import Support from '../../../static/assets/images/support.png'
import Network from '../../../static/assets/images/network.png'
export default ()=>{
    return(
        <>
        <div className="servicessecttwo-container container-fluid">
            <div className="servicessecttwo-subcontainer container">
                <div className="servicessecttwo-row d-flex justify-content-between">
                    <div className="servicessecttwo-col-one">
                        <img src={Funding} alt="Not Found"/>
                        <h4>FUNDING</h4>
                        <p>
                        One of the most challenging barriers of entry into any industry, especially for young black entrepreneurs, is capital. We leverage off our resources, expertise and relationships to assist small business to overcome this barrier.
                        </p>
                    </div>
                    <div className="servicessecttwo-col-two">
                     <img src={Support} alt="Not Found"/>
                     <h4>BUSINESS SUPPORT</h4>
                     <p>
                     Entrepreneurs are often experts at the products and services that they offer, and lack the acumen in other areas required to sustain and grow their businesses. This remains our core value add, and what we do best!
                     </p>
                    </div>
                    <div className="servicessecttwo-col-three">
                     <img src={Network} alt="Not Found"/>
                     <h4>BUSINESS NETWORK</h4>
                     <p>
                     One of the key enablers for business growth is access to markets, which can be accelerated by relationships. We leverage off our existing relationships across the different lines of business to unlock opportunities.
                     </p>
                    </div>
                </div>
            </div>
        </div>
        <Style/>
        </>
    );
}