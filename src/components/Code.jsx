import { Box,styled} from '@mui/material'
import React, { useContext } from 'react'
import Editor from './Editor'
import { DataContext } from '../context/DataProvider'

const Container=styled(Box)({
  display:'flex',
  backgroundColor:'#060606'
})

export default function Code() {

   const {html,setHtml,css,setCss,js,setJs}=useContext(DataContext);

  return (
    <Container>
    <Editor 
      heading='HTML'
      icon="/"
      color="#ff3c41"
      value={html} 
      onChange={setHtml}
      mode='xml'
    />
    <Editor
      heading='CSS'
      icon="*"
      color="#0ebeff"
      value={css} 
      onChange={setCss}
      mode='css'
    />
    <Editor
      heading='JavaScript'
      icon="{}"
      color="#fcd000"
      value={js} 
      onChange={setJs}
      mode='js'
    />
    </Container>
    
  )
}
