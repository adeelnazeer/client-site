import React,{useState} from 'react'
import Style from './style'
import Timeline from '../../../static/assets/images/timelinetwo.png';
import Location from '../../../static/assets/images/location.png';
import Website from '../../../static/assets/images/website.png';
import Phone from '../../../static/assets/images/phone.png';
import Email from '../../../static/assets/images/email.png';
import Imagess from '../../../static/assets/images/test.png'
import Axios from 'axios'
import {ApiQuery} from '../../../static/config';
export default ()=>{
    const [name,setName]=useState("");
    const [companyName,setcompanyName]=useState("");
    const [contactNumber,setcontactNumber]=useState("");
    const [email,setEmail]=useState("");
    const [supportRequired,setsupportRequired]=useState("");
    const postContact=(event)=>{
        event.preventDefault(event);
        let payload={name:name,companyName:companyName,contactNumber:contactNumber, email:email, supportRequired:supportRequired}
        Axios.post(ApiQuery + '/form/add', payload).then(Response=>{
            console.log(Response.data);
            
        })
    }
    return(
        <>
        <div className="contactsecttwo-container container-fluid">
            <div className="contactsecttwo-subcontainer container">
                <div className="contactsecttwo-col d-flex flex-column justify-content-center">
                <div className="contact-heading">
                    <p>Do you want to grow your business?</p>
                </div>
                <div className="for-desktop">
                <div className="contact-text d-flex justify-content-between">
                    <div className="txtone">
                    <h5>
                    Complete the contact form
                    </h5>
                    </div>
                    <div className="txttwo">
                        <h5>
                        We will sign a mutual non-disclosure should we agree to explore further
                        </h5>
                    </div>
                    <div className="txtthree">
                        <h5>
                        Proposed business plan with outcome based working structure
                        </h5>
                    </div>
                </div>
                <div className="contact-timeline d-flex">
                    <img src={Timeline} alt="Not Found"/>
                </div>
                <div className="contact-texttwo d-flex justify-content-between">
                    <div className="txtfour">
                    <h5>
                    We will contact you for an exploratory engagement
                    </h5>
                    </div>
                    <div className="txtfive">
                        <h5>
                        Meet and Greet to understand each others objectives and potential synergies
                        </h5>
                    </div>
                </div>
                </div>
                <div className="for-mobile">
                    <img src={Imagess} alt="not found"/>
                </div>
                <div className="contactsecttwo-col-inner d-flex flex-row justify-content-center">
                       
                        <div className="contact-form">
                        <form onSubmit={event=>postContact(event)}>
                        <label>Name & Surname <span>*</span></label><br/>
                        <input
                        value={name}
                        onChange={event=>setName(event.target.value)}
                        /><br/>
                        <label>Company Name <span>*</span></label><br/>
                        <input
                        value={companyName}
                        onChange={event=>setcompanyName(event.target.value)}
                        /><br/>
                        <label>Contact Number <span>*</span></label><br/>
                        <input
                        value={contactNumber}
                        onChange={event=>setcontactNumber(event.target.value)}
                        /><br/>
                        <label>Email <span>*</span></label><br/>
                        <input
                        value={email}
                        onChange={event=>setEmail(event.target.value)}
                        /><br/>
                        <label>Support Required:</label>
                        <div class="radiobutton d-flex justify-content-between">
                            <div>
                            <label class="radiolabel" for="one">FUNDING</label>
                            <input type="radio" name="role" id="one"
                            value={supportRequired}
                            onChange={event=>setsupportRequired(event.target.value)}
                            />
                            </div>
                            <div>
                            <label class="radiolabel" for="two">BUSINESS SUPPORT</label>
                            <input type="radio" name="role" id="two"
                            value={supportRequired}
                            onChange={event=>setsupportRequired(event.target.value)}
                            />
                            </div>
                            <div>
                            <label class="radiolabel" for="three">BUSINESS NETWORK</label>
                            <input type="radio" name="role" id="three"
                            value={supportRequired}
                            onChange={event=>setsupportRequired(event.target.value)}
                            />
                            </div>
                        </div>
                        <button type="submit">SUBMIT</button>
                        </form>
                        </div>
                        
                </div>
                <hr></hr>
                <div className="contact-footer d-flex justify-content-center">
                    <div>
                        <img src={Location} alt="Not Found"/>
                        <p>72 7th Road, Kew, Bramley</p>
                    </div>
                    <div>
                        <img src={Website} alt="Not Found"/>
                        <p>www.nyra.co.za</p>
                    </div>
                    <div>
                        <img src={Phone} alt="Not Found"/>
                        <p>+27 10 447 1056</p>
                    </div>
                    <div>
                        <img src={Email} alt="Not Found"/>
                        <p>info@nyra.co.za</p>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
        <Style/>
        </>
    );
}