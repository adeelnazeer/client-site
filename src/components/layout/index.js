import React from 'react'
import Header from '../header/index';
import Footer from '../footer/index';
export default(props)=>{
    return(
        <>
            <Header/>
            {props.children}
            <Footer/>
        </>
    );
}