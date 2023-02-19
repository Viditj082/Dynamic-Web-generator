import React, { useContext, useEffect } from 'react'
import {Box,styled} from '@mui/material'
import { DataContext } from '../context/DataProvider'

export default function Result() {
  
  const {html,css,js}=useContext(DataContext);
  const sourceCode=`
  <html>
  <body>${html}</body>
  <style>${css}</style>
  <script>${js}</script>
  </html>
  `
//   useEffect(()=>{
//     setTimeout(()=>{},2000)
//   },[html,css,js]); For Performance issue

  return (
     <Box>
        <iframe
            srcDoc={sourceCode}
            title='Output'
            sandbox='allow-scripts'
            frameBorder={0}
            width='100%'
            height='100%'
        />
     </Box>
  )
}
