import { Avatar, Stack, Typography, Box, InputBase } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import {api} from '../Const.js';

export default function Post() {



    const dispatch = useDispatch();
    const { post } = useSelector((state) => state.Post);

    return (
        <Stack sx={{ width: "50%", minWidth: "450px", margin: { md: "2% 5%", sm: "2% auto", xs: "2% auto" }, gap: "20px", paddingBottom: "2%" }}>
            {
                post?.map((curr, indx) => {
                    if (curr?.image) {
                        return <Stack sx={{ width: "100%", backgroundColor: "white", borderRadius: "5px", border: "1px #9eaaba solid", gap: "10px", padding: "15px 0px", flexDirection: "column" }} key={indx}>
                            <Stack sx={{ flexDirection: "row", alignItems: 'center', gap: "10px", padding: "0px 10px" }}>
                                <Avatar src={api+"/uploads/"+curr?.owner?.image} />
                                <Typography variant='h3' sx={{ fontSize: "14px" }}>{curr?.owner?.name}</Typography>
                            </Stack>
                            <img src={api +"/uploads/"+curr?.image} style={{ width: "100%", objectFit: "contain" }} alt="post" />
                            <Stack sx={{ flexDirection: "row", gap: "10px", padding: "0px 10px" }}>
                                <FavoriteBorderIcon sx={{ color: "primary.main", fontSize: "28px", cursor: "pointer" }} />
                                <RateReviewOutlinedIcon sx={{ color: "primary.main", fontSize: "28px", cursor: "pointer" }} />
                            </Stack>
                            <Typography sx={{ padding: "0px 10px", fontSize: "14px", color: "text.main" }} variant="h4">
                                <span style={{ fontWeight: 500 }}>
                                    {curr?.owner?.name + " : "}
                                </span>
                                {curr?.description}
                            </Typography>
                            <Typography sx={{ padding: "0px 10px", fontSize: "14px", color: "whiteShade.main" }} variant="h4"> View all 8 comments</Typography>
                            <Typography sx={{ padding: "0px 10px", fontSize: "12px", color: "whiteShade.main" }} variant="h4"> 2 days ago</Typography>
                            <Box sx={{ width: "100%", height: "1px", backgroundColor: "whiteShade.main" }}></Box>
                            <form style={{ padding: "0px 10px", display: "flex", gap: "10px" }}>
                                <InputBase placeholder='Comment' sx={{ fontSize: "14px" }} fullWidth />
                                <button style={{ backgroundColor: "#0095f6", border: "none", cursor: "pointer", borderRadius: "5px", padding: "10px 20px", color: "white" }}>Post</button>
                            </form>
                        </Stack>
                    } else {
                        return <Stack sx={{ width: "100%", backgroundColor: "white", borderRadius: "5px", border: "1px #9eaaba solid", gap: "10px", padding: "15px 0px", flexDirection: "column" }} key={indx}>
                            <Stack sx={{ flexDirection: "row", alignItems: 'center', gap: "10px", padding: "0px 10px" }}>
                                <Avatar src={api+"/uploads/"+curr?.owner?.image} />
                                <Typography variant='h3' sx={{ fontSize: "14px" }}>{curr?.owner?.name}</Typography>
                            </Stack>
                            <Typography sx={{ padding: "0px 10px", fontSize: "14px", color: "text.main" }} variant="h4">
                                <span style={{ fontWeight: 500 }}>
                                    {curr?.owner?.name + " : "}
                                </span>
                                {curr?.description}
                            </Typography>
                            <Stack sx={{ flexDirection: "row", gap: "10px", padding: "0px 10px", alignItems: "center" }}>
                                <FavoriteBorderIcon sx={{ color: "primary.main", fontSize: "28px", cursor: "pointer" }} />
                                <Typography variant='h4' sx={{ fontSize: "18px" }}>{curr?.likes?.length}</Typography>
                                <RateReviewOutlinedIcon sx={{ color: "primary.main", fontSize: "28px", cursor: "pointer" }} />
                                <Typography variant='h4' sx={{ fontSize: "18px" }}>{curr?.comments?.length}</Typography>
                            </Stack>
                            <Typography sx={{ padding: "0px 10px", fontSize: "14px", color: "whiteShade.main" ,cursor:"pointer"}} variant="h4">{"View all comments"}</Typography>
                            <Typography sx={{ padding: "0px 10px", fontSize: "12px", color: "whiteShade.main" }} variant="h4"> 2 days ago</Typography>
                            <Box sx={{ width: "100%", height: "1px", backgroundColor: "whiteShade.main" }}></Box>
                            <form style={{ padding: "0px 10px", display: "flex", gap: "10px" }}>
                                <InputBase placeholder='Comment' sx={{ fontSize: "14px" }} fullWidth />
                                <button style={{ backgroundColor: "#0095f6", border: "none", cursor: "pointer", borderRadius: "5px", padding: "10px 20px", color: "white" }}>Post</button>
                            </form>
                        </Stack>
                    }

                })
            }
        </Stack>
    )
}
