import React from 'react'
import NotFound from "../../Assets/PageNotFound404.png"
import logo from '../../Assets/logo.png' 
import { Box, useTheme, useMediaQuery } from "@mui/material";
import { Link } from 'react-router-dom';


const PageNotFound = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box width="100%" backgroundColor={theme.palette.background.alt} p="1rem 6%" textAlign="center" >
        <Link to="/">  <img src={logo} alt="logoInstaSo" className="d-inline-block align-text-top logoNav"/></Link>
      </Box>
      <Box width={isNonMobileScreens ? "70%" : "93%"} p="2rem" m="2rem auto" borderRadius="1.5rem" backgroundColor={theme.palette.background.alt} >
        <Box textAlign="center" p="10px">
          <img src={NotFound} alt='NotFound404' />
        </Box>
      </Box>
    </Box>

  )
}

export default PageNotFound