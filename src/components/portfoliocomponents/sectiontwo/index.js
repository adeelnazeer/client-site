import React from 'react'
import Style from './style'
import Contactagon from '../../../static/assets/images/contactagon.png'
import Masimo from '../../../static/assets/images/masimo.png'
import Blaq from '../../../static/assets/images/blaq.png'
import Centriole from '../../../static/assets/images/centriole.png'

export default ()=>{
    return(
        <>
        <div className="portfoliosecttwo-container container-fluid">
            <div className="portfoliosecttwo-subcontainer container">
                <div className="portfoliosecttwo-row d-flex justify-content-between">
                <table className="table table-borderless">
                <tbody>
                    <tr>
                        <td><img src={Contactagon} alt="Not Found"/></td>
                        <td className="col-two"><p>Contactagon (Pty) Ltd.</p></td>
                        <td className="col-three"><p>Business Process Outsourcing</p></td>
                        <td className="col-four"><p>Contactagon is a Digital Solutions Provider, specialising in outsourced customer management solutions. A registered Financial Services Provider.</p></td>
                    </tr>
                    <tr>
                        <td className="col-one"><img src={Masimo} alt="Not Found"/></td>
                        <td className="col-two"><p>Masimo a Dinare (Pty) Ltd.</p></td>
                        <td className="col-three"><p>Agriculture</p></td>
                        <td className="col-four"><p>
                        Masimo a Dinare was established for the purpose of large scale beef production in the form of livestock.
                            </p></td>
                    </tr>
                    <tr>
                        <td className="col-one"><img className="blaq" src={Blaq} alt="Not Found"/></td>
                        <td className="col-two"><p>Blaq n Lime (Pty) Ltd.</p></td>
                        <td className="col-three"><p>Marketing and Communications</p></td>
                        <td className="col-four"><p><span>
                        Blaq n Lime Marketing & Communications is an Events Management company that specialises in the planning, managing and delivering events that facilitate opportunities for our customers to create long term value
                        </span></p></td>
                    </tr>
                    <tr>
                        <td className="col-one"><img src={Centriole} alt="Not Found"/></td>
                        <td className="col-two"><p>Centriole (Pty) Ltd.</p></td>
                        <td className="col-three"><p>Procurement Management</p></td>
                        <td className="col-four"><p>
                        Centriole is not just a procurement management company, we are a trade house. Through our network of specialist SMMEs, we are able to supply quality products and services on time, every time
                            </p></td>
                    </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
        <Style/>
        </>
    );
}