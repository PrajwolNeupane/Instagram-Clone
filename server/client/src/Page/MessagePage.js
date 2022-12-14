import { Avatar, Stack, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import LeftNavigationBar from '../Component/LeftNavigationBar'
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';

export default function MessagePage() {


    const image = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4];
    const sm = useMediaQuery('(min-width:800px)');
    const [userIndex, setUserIndex] = useState(null);
    const [typeMessage, setTypeMessage] = useState("");


    const onChange = (e) => {
        setTypeMessage(e.target.value);
    }

    const sendMessage = () => {
        alert(typeMessage)
    }


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
                        <Stack sx={{ flexDirection: "column", width: "100%", height: "100%", gap: "10px", overflowY: "auto",marginBottom:{md:"0px",sm:"30px",xs:"30px"} }}>
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
                                                <Stack sx={{ width: "8px", height: "8px", backgroundColor: "green", borderRadius: "4px", marginLeft: "25%", display: { md: "block", sm: "block", xs: "none" } }}></Stack></> : <>
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
                            <Stack sx={{ width: "65%"}}>
                                <Stack sx={{ flexDirection: "row", padding: "9px 20px", alignItems: "center", gap: "10px", borderBottom: "1px #9eaaba solid" }}>
                                    <Avatar src={image} />
                                    <Typography variant='h3' sx={{ fontSize: "15px" }}>Prajwol Neupane</Typography>
                                </Stack>
                                <Stack sx={{ flexDirection: "column", overflowY: "auto", padding: "10px 20px",marginBottom:"70px",gap:"10px" }}>
                                    {
                                        array.map((curr, indx) => (
                                            <>
                                                <Stack sx={{ alignItems: "flex-start" }}>
                                                    <Typography sx={{ backgroundColor: "white", padding: "10px", borderRadius: "15px", maxWidth: {sm:"380px",xs:"240px"}, border: "1px #9eaaba solid", fontSize: "14px" }}>
                                                        Hello
                                                    </Typography>
                                                </Stack>
                                                <Stack sx={{ alignItems: "flex-end" }}>
                                                    <Typography sx={{ backgroundColor: "blueShade.superlight", padding: "10px", borderRadius: "15px", maxWidth: {sm:"380px",xs:"240px"}, fontSize: "14px" }}>
                                                        HelloSearch for the keywords to learn more about each warning.
                                                        To ignore, add // eslint-disable-next-line to the line before.
                                                        Search for the keywords to learn more about each warning.
                                                        To ignore, add // eslint-disable-next-line to the line before.
                                                    </Typography>
                                                </Stack>
                                            </>
                                        ))
                                    }
                                    <Stack sx={{ position: "fixed", bottom: {md:"17px",sm:"47px",xs:"47px"}, width: {lg:"46%",md:"50%",sm:"60%",xs:"60%"}, backgroundColor: "white", margin: "0px -20px", height: "40px", padding: "10px 0px", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                                        <textarea style={{ width: "85%", height: "100%", resize: "none", border: "1px #9eaaba solid", borderRadius: "5px", outline: "none", fontSize: "14px", fontWeight: 500, fontFamily: "'Poppins', sans-serif" }} placeholder="Message" value={typeMessage} onChange={onChange}></textarea>
                                        <button style={{ padding: "6px 14px", cursor: "pointer", borderRadius: "10px", border: "1px #9eaaba solid", backgroundColor: "#0095f6" }} onClick={() => {
                                            sendMessage();
                                        }}>Send</button>
                                    </Stack>
                                </Stack>
                            </Stack>
                    }
                </Stack>
            </Stack>
        </Stack>
    )
}
