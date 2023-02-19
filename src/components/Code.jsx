import { Box,styled} from '@mui/material'
import React from 'react'
import Editor from './Editor'


const Container=styled(Box)({
  display:'flex',
  backgroundColor:'#060606'
})

export default function Code() {
  return (
  
    <Container>
    <Editor 
      heading='HTML'
      icon="/"
      color="#ff3c41"
    />
    <Editor
      heading='CSS'
      icon="*"
      color="#0ebeff"
    />
    <Editor
      heading='JavaScript'
      icon="{}"
      color="#fcd000"
    />
    </Container>
    
  )
}
