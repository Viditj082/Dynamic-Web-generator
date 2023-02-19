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
import 'codemirror/addon/edit/closebrackets'

const Container=styled(Box)({
    flexGrow:1,
    flexBasis:0,
    display:'flex',
    flexDirection:'column',
    padding:'0 8px 8px',
    maxWidth:'32%'
})

export default function Editor({heading,icon,color,mode,value,onChange}) {

   const HandleChange=(editor,data,value)=>{
       onChange(value);
   }
   
    const Heading=styled(Box)({
        background:'#1d1e22',
        display:'flex',
        padding:'0.5rem'
    })

 const Header=styled(Box)({
 display:'flex',
 background:'#060606',
 color:'white',
 justifyContent:'space-between',
 fontWeight:700
})

const [open,setOpen]=useState(true)

  return (

    <Container style={ open? {flexGrow:1} : {flexGrow:0.3} }>
    <Header>
      <Heading>
        <Box component='span' 
        style={{
            background:color,
            color:'#000000',
            width:20,
            heigth:20,
            display:'flex',
            placeContent:'center',
            borderRadius:5,
            marginRight:5,
            paddingBottom:2
        }}>

        {icon}
        
        </Box>
        {heading}
      </Heading>  
      <CloseFullscreenIcon 
       fontSize='small'
       align
        onClick={()=>{
            setOpen(!open)
        }}

        style={{
            alignSelf:'center'
        }}
      />
    </Header>
    <CodeMirror  
        value={value}
        onBeforeChange={HandleChange}
        className='controlled-editor'
        options={{
            mode:mode,
            theme:'material',
            lineNumbers:true,
            autoCloseBrackets:true
        }}
    /> 
    </Container>
  )
}
