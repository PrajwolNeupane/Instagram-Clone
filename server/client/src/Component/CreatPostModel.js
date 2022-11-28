import { Avatar, Box, Modal, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function CreatPostModel({ open, setOpen }) {

    const image = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';

    const [selectedImage, setSelectedImage] = useState(null);


    return (
        <Modal
            open={open}
            setOpen={setOpen}
            onClose={() => {
                setOpen(false)
                setSelectedImage(null);
            }}
        >
            <Box sx={{
                position: 'absolute', top: '50%', left: '50%', width: { md: "900px", sm: "700px", xs: "400px" },
                transform: 'translate(-50%, -50%)', backgroundColor: "white", border: "none", borderRadius: "0px", height: { md: "80vh", sm: "80vh", xs: "90vh" }, outline: "none",
                padding: "10px 30px", overflowX: "hidden",overflowY:"auto"
            }}>
                <Typography variant='h4' sx={{ fontSize: "16px", textAlign: "center" }}>Create new post</Typography>
                <Stack sx={{ flexDirection: { md: "row", sm: "row", xs: "column" }, gap: {md:"20px",sm:"20px",xs:"60px"} }}>
                    <Box sx={{ width: { md: "500px", sm: "300px", xs: "300px" }, height: { md: "500px", sm: "300px", xs: "300px" } }}>
                        {
                            selectedImage === null ? <></> : <img src={URL.createObjectURL(selectedImage)} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        }
                        <input type={"file"} id="btn" style={{ display: "none" }} onChange={(e)=>{
                            setSelectedImage(e.target.files[0])
                        }}/>
                        <button onClick={() => {
                            document.getElementById("btn").click();
                        }} style={{margin:"auto",width:"100%",padding:"5px",fontSize: "14px", fontWeight: 500, cursor: "pointer", fontFamily: "'Poppins', sans-serif",backgroundColor:"#0095f6" ,border:"none"}}>Choose a photo</button>
                    </Box>
                    <Stack sx={{ gap: "20px", width: { md: "50%", sm: "50%", xs: "100%" }, height: { md: "500px", sm: "500px", xs: "250px" } }}>
                        <Stack sx={{ flexDirection: "row", gap: "10px" }}>
                            <Avatar src={image} sx={{ width: "45px", height: "45px" }} />
                            <Stack sx={{ flexDirection: "column" }}>
                                <Typography variant='h3' sx={{ color: "text.main", fontSize: "16px" }}>Prajwol Neupane</Typography>
                                <Typography variant='h4' sx={{ color: "text.main", fontSize: "14px" }}>prajwolneupane68@gmail.com</Typography>
                            </Stack>
                        </Stack>
                        <textarea style={{ width: "100%", height: "100%", resize: "none", border: "1px #9eaaba solid", borderRadius: "5px", outline: "none", fontSize: "14px", fontWeight: 500, fontFamily: "'Poppins', sans-serif" }} placeholder="Caption"></textarea>
                        <button style={{ padding: "5px", fontSize: "14px", fontWeight: 500, cursor: "pointer", fontFamily: "'Poppins', sans-serif" }}>Post</button>
                    </Stack>
                </Stack>
            </Box>
        </Modal>
    )
}