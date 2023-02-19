import React from 'react'
import Header from './Header';
import Code from './Code';
import Result from './Result';

 function Home() {
  return (

    //React.Fragment does not create an extra dom node
     <React.Fragment>  
        <Header/>
        <Code/>
        <Result/>
    </React.Fragment>
  )
}

export default Home;
