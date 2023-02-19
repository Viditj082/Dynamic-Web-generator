import React from 'react'
import Header from './Header';
import Code from './Code';

 function Home() {
  return (

    //React.Fragment does not create an extra dom node
     <React.Fragment>  
        <Header/>
        <Code/>
    </React.Fragment>
  )
}

export default Home;
