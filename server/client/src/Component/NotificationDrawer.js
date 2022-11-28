import React from 'react';
import { Drawer, Typography, Stack, InputBase, Avatar, useMediaQuery } from '@mui/material';

export default function NotificationDrawer({ open, setOpen }) {

    const sm = useMediaQuery('(min-width:900px)');
    const image = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';

    const arr = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <Drawer anchor={`${sm === true ? 'left' : 'bottom'}`} open={open} onClose={() => {
            setOpen(false);
        }}>
            <Stack p={2} width={`${sm === true ? '300px' : '90%'}`}textAlign={"start"} role='presentation' sx={{ gap: "20px" ,height:`${sm === true ? '94vh' : '300px'}`}}>
                <Typography variant='h3' sx={{ fontSize: "20px" }}>Notification</Typography>
                <Stack sx={{ overflowY: "auto", gap: "20px" }}>
                    {
                        arr.map((curr, indx) => (
                            <Stack sx={{ flexDirection: "row", justifyContent: "space-between", gap: "10px",padding:"5px" ,cursor:"pointer",transition:"0.5s",':hover':{
                                backgroundColor:"whiteShade.light"
                            }}} key={indx}>
                                <Avatar src={image} />
                                <Typography sx={{ width: "70%", fontSize: "14px" }} variant="h4">
                                    <span style={{ fontWeight: 600 }}>Prajwol Neupane</span> started following you.
                                </Typography>
                                <button style={{ height: "30px", padding: "0px 15px", cursor: "pointer", border: "1px #9eaaba solid ", backgroundColor: "#0095f6" }}>
                                    Follow
                                </button>
                            </Stack>
                        ))
                    }
                    {
                        arr.map((curr, indx) => (
                            <Stack sx={{ flexDirection: "row", justifyContent: "space-between", gap: "10px" }} key={indx}>
                                <Avatar src={image} />
                                <Typography sx={{ width: "70%", fontSize: "14px" }} variant="h4">
                                    <span style={{ fontWeight: 600 }}>Prajwol Neupane</span> like your post.
                                </Typography>
                                <img src={image} style={{ width: "50px", height: "50px", objectFit: "cover" }} />
                            </Stack>
                        ))
                    }
                    {
                        arr.map((curr, indx) => (
                            <Stack sx={{ flexDirection: "row", justifyContent: "space-between", gap: "10px" }} key={indx}>
                                <Avatar src={image} />
                                <Typography sx={{ width: "70%", fontSize: "14px" }} variant="h4">
                                    <span style={{ fontWeight: 600 }}>Prajwol Neupane</span> commented  on  your post.
                                </Typography>
                                <img src={image} style={{ width: "50px", height: "50px", objectFit: "cover" }} />
                            </Stack>
                        ))
                    }
                </Stack>
            </Stack>
        </Drawer>
    )
}
