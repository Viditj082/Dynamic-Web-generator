import React,{useState} from 'react'
import {Box,styled} from '@mui/material'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import '../App.css'
import {Controlled as CodeMirror} from 'react-codemirror2'

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

const Container=styled(Box)({
    flexGrow:1,
    flexBasis:0,
    display:'flex',
    flexDirection:'column',
    padding:'0 8px 8px'
})

export default function Editor(props) {


   
    const Heading=styled(Box)({
        background:'#1d1e22',
        display:'flex',
    })

 const Header=styled(Box)({
 display:'flex',
 background:'#060606',
 color:'#AAAEBC',
 justifyContent:'space-between',
 fontWeight:700
})

const [state,setState]=useState({
    html:'',
    css:'',
    js:''
});
  
  return (
    
    <Container>
    <Header>
      <Heading>
        <Box component='span' 
        style={{
            background:props.color,
            color:'#000000',
            width:20,
            heigth:20,
            display:'flex',
            placeContent:'center',
            borderRadius:5,
            marginRight:5,
            paddingBottom:2
        }}>

        {props.icon}
        
        </Box>
        {props.heading}
      </Heading>  
      <CloseFullscreenIcon/>
    </Header>
    <CodeMirror value={state.html} onChange={(e)=>{
        setState({
            ...state,
            html:e.target.value
        })
    }}
        className='controlled-editor'
        options={{
            mode:'css',
            theme:'material',
            lineNumbers:true
        }}
    /> 
    </Container>
  )
}
