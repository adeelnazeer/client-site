import React from 'react'
import Layout from '../../components/layout/index';
import Sectionone from '../../components/aboutcomponents/sectionone/index';
import Sectiontwo from '../../components/aboutcomponents/sectiontwo/index';
export default ()=>{
    return(
        <>
        <Layout>
            <Sectionone/>
            <Sectiontwo/>
        </Layout>
        </>
    );
}