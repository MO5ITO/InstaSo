import { Box, Typography, useTheme } from "@mui/material";
import Friends from "Components/Friends";
import Widgets from "Components/Widgets";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "State";

const FriendsList = ({ userId }) => {
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);

  const getFriends = async () => {
    const response = await fetch(
      `http://localhost:3001/users/${userId}/friends`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    dispatch(setFriends({ friends: data }));
  };

  useEffect(() => {
    getFriends();
    
  }, []); 

  return (
    <Widgets>
      <Typography color={palette.neutral.dark} variant="h5" fontWeight="500" sx={{ mb: "1.5rem" }}>
        Friend List
      </Typography>
      <Box display="flex" flexDirection="column" gap="1.5rem">
        {Array.isArray(friends) &&
            friends.map((friend) => (
                <Friends key={friend._id}
                    friendId={friend._id}
                    name={`${friend.firstName} ${friend.lastName}`}
                    subtitle={friend.occupation}
                    userPicturePath={friend.picturePath}
                />
            ))}
        </Box>

    </Widgets>
  );
};

export default FriendsList;