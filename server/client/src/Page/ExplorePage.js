import { Stack, Typography } from '@mui/material'
import React from 'react'
import LeftNavigationBar from '../Component/LeftNavigationBar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RateReviewIcon from '@mui/icons-material/RateReview';
import '../style.css';

export default function ExplorePage() {

    const image = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <Stack sx={{ width: "100%", flexDirection: "row" }}>
            <LeftNavigationBar />
            <Stack sx={{ width: "100%", minHeight: {md:"95vh",sm:"92vh",xs:"92vh"}, backgroundColor: "whiteShade.light", marginLeft: { lg: "19%", md: "9.5%", sm: "0px", xs: "0px" },marginBottom:{md:"5vh",sm:"8vh",xs:"8vh"} }}>
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
            </Stack>
        </Stack>
    )
}
