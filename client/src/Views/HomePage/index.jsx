import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import NavBar from 'Views/NavBar'
import UserWidget from "Views/Widgets/UserWidget";
import React from 'react'

const HomePage = () => {

  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <Box>
      <NavBar/>
      <Box width={isNonMobileScreens ? "50%" : "93%"} p="2rem" m="2rem auto" borderRadius="1.5rem" backgroundColor={theme.palette.background.alt} >
        <Typography fontWeight="500" textAlign="center" variant="h5" sx={{ mb: "1.5rem" }}>
          NstaSo! Home Page
        </Typography>
        <UserWidget/>
        </Box>

    </Box>
  )
}

export default HomePage

