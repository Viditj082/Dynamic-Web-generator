import React from 'react'
  
import {AppBar,Toolbar,styled}  from '@mui/material'

const Container=styled(AppBar)({
   background:'#060606',
   color:'yellow',
   heigth:'12vh',
   padding:'0.6rem 0rem'
})

export default function Header() {

    const logo='https://blog.codepen.io/wp-content/uploads/2012/06/Button-White-Large.png'
  return (
    <Container position='static'>
        <Toolbar>
  {/* <img src={logo} alt="logo" style={{width:'50px'}}/> */}
  <h2 className='heading'>DYNAMIC WEB GENERATOR</h2>
        </Toolbar>
    </Container>
  )
}
