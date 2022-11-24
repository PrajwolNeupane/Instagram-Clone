import { Avatar, Stack, Typography, Box, InputBase } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import React from 'react'

export default function Post() {

    const image = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';

    const arr = ['https://images.theconversation.com/files/474497/original/file-20220718-14-gh0ok3.jpg?ixlib=rb-1.1.0&rect=43%2C483%2C4895%2C2447&q=45&auto=format&w=1356&h=668&fit=crop', 'https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80', 'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
        , 'https://images.unsplash.com/photo-1484100356142-db6ab6244067?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=767&q=80']

    return (
        <Stack sx={{ width: "50%", minWidth: "450px", margin: { md: "2% 5%", sm: "2% auto", xs: "2% auto" },gap:"20px",paddingBottom:"2%" }}>
            {
                arr.map((curr, indx) => (
                    <Stack sx={{ width: "100%", backgroundColor: "white", borderRadius: "5px", border: "1px #9eaaba solid", gap: "10px", padding: "15px 0px", flexDirection: "column" }} key={indx}>
                        <Stack sx={{ flexDirection: "row", alignItems: 'center', gap: "10px", padding: "0px 10px" }}>
                            <Avatar src={image} />
                            <Typography variant='h3' sx={{ fontSize: "14px" }}>Prajwol Neupane</Typography>
                        </Stack>
                        <img src={curr} style={{ width: "100%", objectFit: "contain" }} alt="post" />
                        <Stack sx={{ flexDirection: "row", gap: "10px", padding: "0px 10px" }}>
                            <FavoriteBorderIcon sx={{ color: "primary.main", fontSize: "28px", cursor: "pointer" }} />
                            <RateReviewOutlinedIcon sx={{ color: "primary.main", fontSize: "28px", cursor: "pointer" }} />
                        </Stack>
                        <Typography sx={{ padding: "0px 10px", fontSize: "14px", color: "text.main" }} variant="h4">
                            <span style={{ fontWeight: 500 }}>
                                {"Prajwol Neupane "}
                            </span>
                            Note that the development build is not optimized.
                            To create a production build, use yarn build.You can now view client in the browser.
                        </Typography>
                        <Typography sx={{ padding: "0px 10px", fontSize: "14px", color: "whiteShade.main" }} variant="h4"> View all 8 comments</Typography>
                        <Typography sx={{ padding: "0px 10px", fontSize: "12px", color: "whiteShade.main" }} variant="h4"> 2 days ago</Typography>
                        <Box sx={{ width: "100%", height: "1px", backgroundColor: "whiteShade.main" }}></Box>
                        <form style={{ padding: "0px 10px", display: "flex", gap: "10px" }}>
                            <InputBase placeholder='Comment' sx={{ fontSize: "14px" }} fullWidth />
                            <button style={{ backgroundColor: "#0095f6", border: "none", cursor: "pointer", borderRadius: "5px", padding: "10px 20px", color: "white" }}>Post</button>
                        </form>
                    </Stack>
                ))
            }
        </Stack>
    )
}
