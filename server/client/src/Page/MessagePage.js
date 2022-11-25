import { Avatar, Stack, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import LeftNavigationBar from '../Component/LeftNavigationBar'
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';

export default function MessagePage() {


    const image = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4];
    const sm = useMediaQuery('(min-width:800px)');
    const [userIndex, setUserIndex] = useState(null);

    return (
        <Stack sx={{ flexDirection: "row", width: "100%" }}>
            <LeftNavigationBar />
            <Stack sx={{ width: "100%", height: { md: "100vh", sm: "90vh", xs: "90vh" }, backgroundColor: "whiteShade.light", marginLeft: { lg: "19%", md: "9.5%", sm: "0px", xs: "0px" } }}>
                <Stack sx={{ width: { md: "90%", sm: "95%", xs: "98%" }, backgroundColor: "white", height: "95vh", margin: "auto", borderRadius: "6px", border: "1px #9eaaba solid", flexDirection: "row" }}>
                    <Stack sx={{ flexDirection: 'column', width: "35%", backgroundColor: "white", borderRight: "1px #9eaaba solid", borderBottomLeftRadius: "6px", borderTopLeftRadius: "6px" }}>
                        {
                            sm == true ?
                                <Typography sx={{ padding: "20px 0px", textAlign: 'center', borderBottom: "1px #9eaaba solid", fontSize: "16px" }} variant="h3">
                                    Prajwol Neupane
                                </Typography> : <Stack sx={{ width: "100%", alignItems: "center", padding: "10px 0px", borderBottom: "1px #9eaaba solid" }}> <Avatar src={image} sx={{ width: "45px", height: "45px" }} /> </Stack>
                        }
                        <Stack sx={{ flexDirection: "column", width: "100%", height: "100%", gap: "10px", overflowY: "auto", }}>
                            {
                                array.map((curr, indx) => (
                                    <Stack sx={{
                                        flexDirection: "row", width: "90%", gap: "10px", padding: "6px 5%", alignItems: "center", cursor: "pointer", transition: "0.2s", ":hover": {
                                            backgroundColor: "whiteShade.light"
                                        }
                                    }} onClick={() => { setUserIndex(indx) }}>
                                        {
                                            sm === true ? <> <Avatar src={image} sx={{ width: "55px", height: "55px" }} />
                                                <Stack >
                                                    <Typography sx={{ fontSize: "15px" }} variant="h3">Prajwol Neupane</Typography>
                                                    <Typography sx={{ fontSize: "13px" }} variant="h3">OK</Typography>
                                                </Stack>
                                                <Stack sx={{ width: "8px", height: "8px", backgroundColor: "green", borderRadius: "4px", marginLeft: "25%", display: { md: "block", sm: "none", xs: "none" } }}></Stack></> : <>
                                                <Stack >
                                                    <Typography sx={{ fontSize: "15px" }} variant="h3">Prajwol Neupane</Typography>
                                                    <Typography sx={{ fontSize: "13px" }} variant="h3">OK</Typography>
                                                </Stack></>
                                        }
                                    </Stack>
                                ))
                            }


                        </Stack>
                    </Stack>
                    {
                        userIndex === null ? <Stack sx={{ width: "65%", alignItems: "center", justifyContent: "center" }}>
                            <ForwardToInboxOutlinedIcon sx={{ fontSize: "70px" }} />
                            <Typography variant='h5' sx={{ fontSize: "23px" }}>Your Messages</Typography>
                            <Typography variant='h5' sx={{ fontSize: "18px" }}>Click on conversation to start chatting</Typography>
                        </Stack> :
                            <Stack sx={{ width: "65%",padding:"10px 50px" }}>
                                <Stack sx={{ flexDirection: "row", padding: "9px 20px", alignItems: "center", gap: "10px", borderBottom: "1px #9eaaba solid" }}>
                                    <Avatar src={image} />
                                    <Typography variant='h3' sx={{ fontSize: "15px" }}>Prajwol Neupane</Typography>
                                </Stack>
                                <Stack sx={{ flexDirection: "column", overflowY: "auto" }}>
                                    <Stack  sx={{ alignItems: "flex-start" }}>
                                        <Typography sx={{ backgroundColor: "blueShade.superlight", padding: "10px", borderRadius: "10px", maxWidth: "380px" }}>
                                            Hello
                                        </Typography>
                                    </Stack>
                                    <Stack sx={{ alignItems: "flex-end" }}>
                                        <Typography sx={{ backgroundColor: "blueShade.superlight", padding: "10px", borderRadius: "10px", maxWidth: "350px", fontSize: "15px" }}>
                                            HelloSearch for the keywords to learn more about each warning.
                                            To ignore, add // eslint-disable-next-line to the line before.
                                            Search for the keywords to learn more about each warning.
                                            To ignore, add // eslint-disable-next-line to the line before.
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                    }
                </Stack>
            </Stack>
        </Stack>
    )
}
