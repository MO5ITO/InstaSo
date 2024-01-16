import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import NavBar from "Views/NavBar";
import MyPost from "Views/Widgets/MyPost";
import ShowAllPosts from "Views/Widgets/ShowAllPosts";
import SideBarRight from "Views/Widgets/SideBarRight";
import UserWidget from "Views/Widgets/UserWidget";


const HomePage = () => {

  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <Box>
      <NavBar />
      <Box width="100%" padding="2rem 6%" gap="0.5rem" justifyContent="space-between" display={isNonMobileScreens ? "flex" : "block"}>
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={_id} picturePath={picturePath} />
          <Box m="2rem 0" />
          {/* <FriendsList/> */}
        </Box>

        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPost picturePath={picturePath}/>
          <ShowAllPosts userId={_id}/>
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            <SideBarRight/>

          </Box>
        )}
      </Box>
    </Box>
  )
}

export default HomePage

