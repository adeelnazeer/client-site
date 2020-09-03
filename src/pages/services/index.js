import React from 'react'
import Layout from '../../components/layout/index';
import Sectionone from '../../components/servicescomponents/sectionone/index';
import Sectiontwo from '../../components/servicescomponents/sectiontwo/index';
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