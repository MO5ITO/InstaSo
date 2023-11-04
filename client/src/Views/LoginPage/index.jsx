import logo from '../../Assets/logo.png' 
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import AuthForm from './AuthForm';


const LoginPage = () => {

  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <Box>
      <Box width="100%" backgroundColor={theme.palette.background.alt} p="1rem 6%" textAlign="center" >
        <img src={logo} alt="logoInstaSo" className="d-inline-block align-text-top logoNav"/>
      </Box>
      <Box width={isNonMobileScreens ? "50%" : "93%"} p="2rem" m="2rem auto" borderRadius="1.5rem" backgroundColor={theme.palette.background.alt} >
        <Typography fontWeight="500" textAlign="center" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to NstaSo! 
        </Typography>
        <AuthForm/>
      </Box>
    </Box>
  )
}

export default LoginPage