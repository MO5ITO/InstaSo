import React from 'react'
import NotFound from "../../Assets/PageNotFound404.png"
import NavBar from 'Views/NavBar'
import { Box } from '@mui/material'


const PageNotFound = () => {
  return (
    <Box>
      <NavBar/>
      <div className='pageCenter mt-3'>
        <img src={NotFound} alt='NotFound404' />
      </div>
    </Box>

  )
}

export default PageNotFound