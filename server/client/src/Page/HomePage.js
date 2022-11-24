import { Stack } from '@mui/material';
import React from 'react';
import LeftNavigationBar from '../Component/LeftNavigationBar';
import Post from '../Component/Post';
import RightSuggetionBar from '../Component/RightSuggetionBar';



export default function HomePage() {


  return (
    <Stack sx={{ width: "100%", flexDirection: "row" }}>
      <LeftNavigationBar />
      <Stack sx={{ width: "100%", height: "100vh", backgroundColor: "whiteShade.light", marginLeft: { lg: "19%", md: "9.5%", sm: "0px", xs: "0px" } }}>
        <Post />
      </Stack>
      <RightSuggetionBar />
    </Stack>
  )
}
