import { Stack, Typography, Avatar, useMediaQuery } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CreatPostModel from './CreatPostModel';
import NotificationDrawer from './NotificationDrawer';
import SearchDrawer from './SearchDrawer.js';
import { useDispatch, useSelector } from 'react-redux';


export default function LeftNavigationBar() {

    const matchMD = useMediaQuery('(min-width:1200px)');

    const [open,setOpen] = useState(false);
    const [openNotification,setOpenNotifiction] = useState(false);
    const [openSearch,setOpenSearch] = useState(false);
    

    const Navigate = useNavigate();
    const { user } = useSelector((state) => state.User);
   

    return (
        <>
            {matchMD === true ?
                <>
                    <Stack sx={{ width: "15%", backgroundColor: "white", padding: "2% 30px 2% 25px", height: "96vh", gap: "20px", justifyItems: "center", position: "fixed", borderRight: "1px #9eaaba solid" }}>
                        <Typography sx={{ color: "text.main", fontSize: "20px" }} variant="h3">Instagram Clone</Typography>
                        <Stack sx={{
                            flexDirection: "row", gap: "10px", alignItems: "center", padding: "5px", cursor: "pointer", borderRadius: "10px", ":hover": {
                                backgroundColor: "whiteShade.light"
                            }
                        }} onClick={()=>{
                            Navigate("/")
                        }}>
                            <HomeIcon sx={{ fontSize: "30px", color: "text.main" }} />
                            <Typography variant='h4' sx={{ color: "text.main", fontSize: "16px" }}>Home</Typography>
                        </Stack>
                        <Stack sx={{
                            flexDirection: "row", gap: "10px", alignItems: "center", padding: "5px", cursor: "pointer", borderRadius: "10px", ":hover": {
                                backgroundColor: "whiteShade.light"
                            }
                        }} onClick={()=>{
                            setOpenSearch(true);
                        }}>
                            <SearchIcon sx={{ fontSize: "30px", color: "text.main" }} />
                            <Typography variant='h4' sx={{ color: "text.main", fontSize: "16px" }}>Search</Typography>
                        </Stack>
                        <Stack sx={{
                            flexDirection: "row", gap: "10px", alignItems: "center", padding: "5px", cursor: "pointer", borderRadius: "10px", ":hover": {
                                backgroundColor: "whiteShade.light"
                            }
                        }}  onClick={()=>{
                            Navigate("/explore")
                        }}>
                            <ExploreOutlinedIcon sx={{ fontSize: "30px", color: "text.main" }} />
                            <Typography variant='h4' sx={{ color: "text.main", fontSize: "16px" }}>Explore</Typography>
                        </Stack>
                        <Stack sx={{
                            flexDirection: "row", gap: "10px", alignItems: "center", padding: "5px", cursor: "pointer", borderRadius: "10px", ":hover": {
                                backgroundColor: "whiteShade.light"
                            }
                        }} onClick={()=>{
                            Navigate("/message")
                        }}>
                            <ChatBubbleOutlineOutlinedIcon sx={{ fontSize: "30px", color: "text.main" }} />
                            <Typography variant='h4' sx={{ color: "text.main", fontSize: "16px" }}>Messages</Typography>
                            <Typography variant='h3' sx={{ color: "white", fontSize: "16px", backgroundColor: "red", textAlign: "center", height: "20px", width: "20px", borderRadius: "10px" }}>2</Typography>
                        </Stack>
                        <Stack sx={{
                            flexDirection: "row", gap: "10px", alignItems: "center", padding: "5px", cursor: "pointer", borderRadius: "10px", ":hover": {
                                backgroundColor: "whiteShade.light"
                            }
                        }} onClick={()=>{
                            setOpenNotifiction(true);
                        }}>
                            <FavoriteBorderOutlinedIcon sx={{ fontSize: "30px", color: "text.main" }} />
                            <Typography variant='h4' sx={{ color: "text.main", fontSize: "16px" }}>Notifications</Typography>
                        </Stack>
                        <Stack sx={{
                            flexDirection: "row", gap: "10px", alignItems: "center", padding: "5px", cursor: "pointer", borderRadius: "10px", ":hover": {
                                backgroundColor: "whiteShade.light"
                            }
                        }} onClick={()=>{
                            setOpen(true);
                        }}>
                            <AddCircleOutlineOutlinedIcon sx={{ fontSize: "30px", color: "text.main" }} />
                            <Typography variant='h4' sx={{ color: "text.main", fontSize: "16px" }}>Create</Typography>
                        </Stack>
                        <Stack sx={{
                            flexDirection: "row", gap: "10px", alignItems: "center", padding: "5px", cursor: "pointer", borderRadius: "10px", ":hover": {
                                backgroundColor: "whiteShade.light"
                            }
                        }} onClick={()=>{Navigate(`/profile/${user?._id}`)}}>
                            <Avatar src={user?.image} sx={{ border: "2px black solid", width: "30px", height: "30px" }} />
                            <Typography variant='h4' sx={{ color: "text.main", fontSize: "16px" }}>Profile</Typography>
                        </Stack>
                    </Stack>
                </> :
                <>
                    <Stack sx={{ width: {md:"5%",sm:"100%",xs:"100%"}, backgroundColor: "white", padding: {md:"2% 20px",sm:"15px 0px",xs:"15px 0px"}, height: {md:"96vh",sm:"20px",xs:"20px"}, gap: {md:"20px",sm:"5%",xs:"5%"}, justifyContent:{md:"start",sm:"center",xs:"center"},justifyItems:{md:'center',sm:"space-between"}, position: "fixed", borderRight: "1px #9eaaba solid", alignItems: "center" ,bottom:{sm:"0px",xs:"0px"},flexDirection:{md:"column",sm:"row",xs:"row"}}}>
                        <Typography sx={{ color: "text.main", fontSize: "20px",display:{md:"block",sm:"block",xs:"none"} }} variant="h3">IC</Typography>
                        <Stack sx={{
                            flexDirection: "row", gap: "10px", alignItems: "center", padding: "5px", cursor: "pointer", borderRadius: "10px", ":hover": {
                                backgroundColor: "whiteShade.light"
                            }
                        }} onClick={()=>{Navigate("/")}}>
                            <HomeIcon sx={{ fontSize: "30px", color: "text.main" }} />
                        </Stack>
                        <Stack sx={{
                            flexDirection: "row", gap: "10px", alignItems: "center", padding: "5px", cursor: "pointer", borderRadius: "10px", ":hover": {
                                backgroundColor: "whiteShade.light"
                            }
                        }} onClick={()=>{
                            setOpenSearch(true);
                        }}>
                            <SearchIcon sx={{ fontSize: "30px", color: "text.main" }} />
                        </Stack>
                        <Stack sx={{
                            flexDirection: "row", gap: "10px", alignItems: "center", padding: "5px", cursor: "pointer", borderRadius: "10px", ":hover": {
                                backgroundColor: "whiteShade.light"
                            }
                        }} onClick={()=>{
                            Navigate("/explore")
                        }}>
                            <ExploreOutlinedIcon sx={{ fontSize: "30px", color: "text.main" }} />
                        </Stack>
                        <Stack sx={{
                            flexDirection: "row", gap: "10px", alignItems: "center", padding: "5px", cursor: "pointer", borderRadius: "10px", ":hover": {
                                backgroundColor: "whiteShade.light"
                            }
                        }} onClick={()=>{Navigate("/message")}}>
                            <ChatBubbleOutlineOutlinedIcon sx={{ fontSize: "30px", color: "text.main" }} />
                        </Stack>
                        <Stack sx={{
                            flexDirection: "row", gap: "10px", alignItems: "center", padding: "5px", cursor: "pointer", borderRadius: "10px", ":hover": {
                                backgroundColor: "whiteShade.light"
                            }
                        }} onClick={()=>{
                            setOpenNotifiction(true);
                        }}>
                            <FavoriteBorderOutlinedIcon sx={{ fontSize: "30px", color: "text.main" }} />
                        </Stack>
                        <Stack sx={{
                            flexDirection: "row", gap: "10px", alignItems: "center", padding: "5px", cursor: "pointer", borderRadius: "10px", ":hover": {
                                backgroundColor: "whiteShade.light"
                            }
                        }} onClick={()=>{
                            setOpen(true);
                        }}>
                            <AddCircleOutlineOutlinedIcon sx={{ fontSize: "30px", color: "text.main" }} />
                        </Stack>
                        <Stack sx={{
                            flexDirection: "row", gap: "10px", alignItems: "center", padding: "5px", cursor: "pointer", borderRadius: "10px", ":hover": {
                                backgroundColor: "whiteShade.light"
                            }
                        }} onClick={()=>{Navigate(`/profile/${user?._id}`)}}>
                            <Avatar src={user?.image} sx={{ border: "2px black solid", width: "30px", height: "30px" }} />
                        </Stack>
                    </Stack>
                </>}
                <CreatPostModel open={open} setOpen={setOpen}/>
                <NotificationDrawer open={openNotification} setOpen={setOpenNotifiction}/>
                <SearchDrawer open={openSearch} setOpen={setOpenSearch}/>
                </>
    )
}
