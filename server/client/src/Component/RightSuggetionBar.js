import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { api } from '../Const';

export default function RightSuggetionBar() {

    const image = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';

    const { user } = useSelector((state) => state.User);
    const navigation = useNavigate();


    return (
        <Stack sx={{ position: "fixed", right: "0px", height: "96vh", backgroundColor: "whiteShade.light", width: "25%", padding: "2% 80px 2% 20px", gap: "10px", display: { md: "flex", sm: "none", xs: "none" } }}>
            <Stack sx={{ flexDirection: "row", gap: "10px", alignItems: "center", cursor: "pointer" }} onClick={ ()=>{
                navigation(`/profile/${user?._id}`);
            }}>
                <Avatar src={api+'/uploads/'+user?.image} sx={{ width: "45px", height: "45px", border: "2px #9eaaba solid" }} />
                <Stack>
                    <Typography variant='h3' sx={{ fontSize: "15px", color: "text.main" }}>{user?.name}</Typography>
                    <Typography variant='h4' sx={{ fontSize: "14px", color: "text.light" }}>{user?.email}</Typography>
                </Stack>
            </Stack>
            <Typography variant='h3' sx={{ fontSize: "15px", color: "text.light" }}>Suggestion for you</Typography>
            <Stack sx={{ flexDirection: "row", alignItems: "center", width: "100%", justifyContent: "space-between" }}>
                <Avatar src={image} sx={{ cursor: "pointer" }} />
                <Typography variant='h3' sx={{ fontSize: "15px", color: "text.main", position: "absolute", left: "70px", cursor: "pointer" }}>Prajwol Neupane</Typography>
                <Typography variant='h3' sx={{ fontSize: "14px", color: "blueShade.light", position: "0px", cursor: "pointer" }}>Follow</Typography>
            </Stack>
            <Stack sx={{ flexDirection: "row", alignItems: "center", width: "100%", justifyContent: "space-between" }}>
                <Avatar src={image} sx={{ cursor: "pointer" }} />
                <Typography variant='h3' sx={{ fontSize: "15px", color: "text.main", position: "absolute", left: "70px", cursor: "pointer" }}>Prajwol Neupane</Typography>
                <Typography variant='h3' sx={{ fontSize: "14px", color: "blueShade.light", position: "0px", cursor: "pointer" }}>Follow</Typography>
            </Stack>
            <Stack sx={{ flexDirection: "row", alignItems: "center", width: "100%", justifyContent: "space-between" }}>
                <Avatar src={image} sx={{ cursor: "pointer" }} />
                <Typography variant='h3' sx={{ fontSize: "15px", color: "text.main", position: "absolute", left: "70px", cursor: "pointer" }}>Prajwol Neupane</Typography>
                <Typography variant='h3' sx={{ fontSize: "14px", color: "blueShade.light", position: "0px", cursor: "pointer" }}>Follow</Typography>
            </Stack>
            <Stack sx={{ flexDirection: "row", alignItems: "center", width: "100%", justifyContent: "space-between" }}>
                <Avatar src={image} sx={{ cursor: "pointer" }} />
                <Typography variant='h3' sx={{ fontSize: "15px", color: "text.main", position: "absolute", left: "70px", cursor: "pointer" }}>Prajwol Neupane</Typography>
                <Typography variant='h3' sx={{ fontSize: "14px", color: "blueShade.light", position: "0px", cursor: "pointer" }}>Follow</Typography>
            </Stack>
            <Stack sx={{ flexDirection: "row", alignItems: "center", width: "100%", justifyContent: "space-between" }}>
                <Avatar src={image} sx={{ cursor: "pointer" }} />
                <Typography variant='h3' sx={{ fontSize: "15px", color: "text.main", position: "absolute", left: "70px", cursor: "pointer" }}>Prajwol Neupane</Typography>
                <Typography variant='h3' sx={{ fontSize: "14px", color: "blueShade.light", position: "0px", cursor: "pointer" }}>Follow</Typography>
            </Stack>
        </Stack>
    )
}
