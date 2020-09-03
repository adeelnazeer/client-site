import React from 'react'
import Layout from '../../components/layout/index';
import Sectionone from '../../components/portfoliocomponents/sectionone/index';
import Sectiontwo from '../../components/portfoliocomponents/sectiontwo/index';
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