import { Typography, useTheme } from "@mui/material";
import FlexBetween from "Components/FlexBetween";
import Widgets from "Components/Widgets";
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';

const SideBarRight = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <Widgets>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <LocalActivityOutlinedIcon/>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/Meilleur-Diag.png"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Meilleur Diag</Typography>
        <Typography color={medium}>Meilleur-Diag.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      Lorsque vous choisissez nos services de diagnostic immobilier, 
      vous faites le choix de vous entourer d'une équipe d'experts qualifiés, 
      maîtrisant parfaitement les techniques du bâtiment. 
      Notre équipe est composée de professionnels compétents et expérimentés, 
      dont l'expertise est reconnue dans le domaine du diagnostic immobilier.
      </Typography>
    </Widgets>
  );
};

export default SideBarRight;