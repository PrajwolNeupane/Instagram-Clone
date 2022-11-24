import { Avatar, Stack, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import LeftNavigationBar from '../Component/LeftNavigationBar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RateReviewIcon from '@mui/icons-material/RateReview';
import '../style.css';

export default function ProfilePage() {

    const { id } = useParams();


    const image = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <Stack sx={{ width: "100%", flexDirection: "row" }}>
            <LeftNavigationBar />
            <Stack sx={{ width: "100%", backgroundColor: "whiteShade.light", marginLeft: { lg: "19%", md: "9.5%", sm: "0px", xs: "0px" }, padding: "2% 0px" }}>
                <Stack sx={{ alignItems: "center" }}>
                    <Stack sx={{ flexDirection: "row", alignItems: "center", gap: { lg: "120px", md: "80px", sm: "50px", xs: "30px" } }}>
                        <Avatar src={image} sx={{ width: { md: "180px", sm: "160px", xs: "140px" }, height:{ md: "180px", sm: "160px", xs: "140px" }, border: "3px #9c9a9a solid" }} />
                        <Stack sx={{ width: { lg: "400px", md: "300px", sm: "250px", xs: "250px" }, gap: "10px" }}>
                            <Typography variant='h5' sx={{ fontSize: "24px" }}>Prajwol Neupane</Typography>
                            <Stack sx={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Typography variant='h5' sx={{ fontSize: "16px" }}><span style={{ fontWeight: 500 }}>19</span> posts</Typography>
                                <Typography variant='h5' sx={{ fontSize: "16px" }}><span style={{ fontWeight: 500 }}>129</span> followers</Typography>
                                <Typography variant='h5' sx={{ fontSize: "16px" }}><span style={{ fontWeight: 500 }}>89</span> following</Typography>
                            </Stack>
                            <Typography variant='h3' sx={{ fontSize: "16px" }}>prajwolneupane68@gmail.com</Typography>
                            <button style={{padding:"8px",fontSize:"14px",fontWeight:600,width:"30%",cursor:"pointer"}}>Edit Profile</button>
                        </Stack>
                    </Stack>
                </Stack>
                <div className='profile-post-grid'>
                    {
                        arr.map((_, indx) => (
                            <div className='profile-post' key={indx}>
                                <Stack sx={{
                                    backgroundImage: `url(${image})`, width: "100%", height: "100%", backgroundSize: "cover",
                                    backgroundPosition: "center", cursor: "pointer", transition: "0.5s", ":hover": {
                                        background: `linear-gradient(rgb(0,0,0,0.5), rgb(0,0,0,0.5)), url(${image})`, backgroundSize: "cover",
                                        backgroundPosition: "center", scale: "1.1"
                                    }
                                }}>
                                    <div className='profile-post-content'>
                                        <FavoriteIcon sx={{ color: "white" }} />
                                        <Typography sx={{ color: "white", fontSize: "16px" }} variant="h4">124</Typography>
                                        <RateReviewIcon sx={{ color: "white" }} />
                                        <Typography sx={{ color: "white", fontSize: "16px" }} variant="h4">124</Typography>
                                    </div>
                                </Stack>
                            </div>
                        ))
                    }
                </div>
            </Stack >
        </Stack >
    )
}
