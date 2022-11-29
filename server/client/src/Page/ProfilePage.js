import { Avatar, Modal, Stack, Typography, Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LeftNavigationBar from '../Component/LeftNavigationBar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RateReviewIcon from '@mui/icons-material/RateReview';
import { addToken } from '../State Management/TokenSlice';
import removeCookie from '../Hooks/removeCookie.js';
import '../style.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { api } from '../Const';
import { addUser } from '../State Management/UserSlice';

export default function ProfilePage() {

    const { id } = useParams();
    const dispatch = useDispatch();
    const [userData, setUserData] = useState({});
    const [open, setOpen] = useState();
    const [selectedImage, setSelectedImage] = useState(null);

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const logOut = async () => {
        removeCookie("c_user");
        dispatch(addToken(null));
    }

    const updatePic = async () => {
        try {

            const res = await axios.post(`${api}/user/update/picture/`,{image:selectedImage,id:userData?._id},{
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            dispatch(addUser(res.data));
            setOpen(false);

        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        const getUserData = async () => {
            const res = await axios.post(`${api}/user/id/`, { id: id });
            setUserData(res?.data);
        }
        if (id) {
            getUserData();
        }
    }, [id]);

    return (
        <>
            <Stack sx={{ width: "100%", flexDirection: "row" }}>
                <LeftNavigationBar />
                <Stack sx={{ width: "100%", backgroundColor: "whiteShade.light", marginLeft: { lg: "19%", md: "9.5%", sm: "0px", xs: "0px" }, padding: "2% 0px" }}>
                    <Stack sx={{ alignItems: "center" }}>
                        <Stack sx={{ flexDirection: "row", alignItems: "center", gap: { lg: "120px", md: "80px", sm: "50px", xs: "30px" } }}>
                            <Avatar src={api+"/uploads/"+userData?.image} sx={{ width: { md: "180px", sm: "160px", xs: "140px" }, height: { md: "180px", sm: "160px", xs: "140px" }, border: "3px #9c9a9a solid" }} onClick={() => { setOpen(true) }} />
                            <Stack sx={{ width: { lg: "400px", md: "300px", sm: "250px", xs: "250px" }, gap: "10px" }}>
                                <Typography variant='h5' sx={{ fontSize: "24px" }}>{userData?.name}</Typography>
                                <Stack sx={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <Typography variant='h5' sx={{ fontSize: "16px" }}><span style={{ fontWeight: 500 }}>{userData?.post?.length}</span> posts</Typography>
                                    <Typography variant='h5' sx={{ fontSize: "16px" }}><span style={{ fontWeight: 500 }}>{userData?.followers?.length}</span> followers</Typography>
                                    <Typography variant='h5' sx={{ fontSize: "16px" }}><span style={{ fontWeight: 500 }}>{userData?.following?.length}</span> following</Typography>
                                </Stack>
                                <Typography variant='h3' sx={{ fontSize: "16px" }}>{userData?.email}</Typography>
                                <Stack sx={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <button style={{ padding: "8px", fontSize: "14px", fontWeight: 600, width: "30%", cursor: "pointer" }}>Edit Profile</button>
                                    <button style={{ padding: "8px", fontSize: "14px", fontWeight: 600, width: "30%", cursor: "pointer" }} onClick={() => { logOut() }}>Log Out</button>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                    <div className='profile-post-grid'>
                        {
                            userData?.post?.map((curr, indx) => {
                                if (curr?.image) {
                                    return <div className='profile-post' key={indx}>
                                        <Stack sx={{
                                            backgroundImage: `url(${api + "/uploads/" + curr?.image})`, width: "100%", height: "100%", backgroundSize: "cover",
                                            backgroundPosition: "center", cursor: "pointer", transition: "0.5s", ":hover": {
                                                background: `linear-gradient(rgb(0,0,0,0.5), rgb(0,0,0,0.5)), url(${api + "/uploads/" + curr?.image})`, backgroundSize: "cover",
                                                backgroundPosition: "center", scale: "1.1"
                                            }
                                        }}>
                                            <div className='profile-post-content'>
                                                <FavoriteIcon sx={{ color: "white" }} />
                                                <Typography sx={{ color: "white", fontSize: "16px" }} variant="h4">{curr?.likes?.length}</Typography>
                                                <RateReviewIcon sx={{ color: "white" }} />
                                                <Typography sx={{ color: "white", fontSize: "16px" }} variant="h4">{curr?.comments?.length}</Typography>
                                            </div>
                                        </Stack>
                                    </div>
                                }
                            })
                        }
                    </div>
                </Stack >
            </Stack >
            <Modal open={open} onClose={() => {
                setOpen(false);
                setSelectedImage(null);
            }}>
                <Box sx={{
                    position: 'absolute', top: '50%', left: '50%', width: { md: "900px", sm: "700px", xs: "400px" },
                    transform: 'translate(-50%, -50%)', backgroundColor: "white", border: "none", borderRadius: "0px", height: { md: "80vh", sm: "80vh", xs: "90vh" }, outline: "none", flexDirection: "column",
                    padding: "10px 30px", overflowX: "hidden", overflowY: "auto", alignContent: "center", justifyContent: "center", display: "flex"
                }}>
                    {
                        selectedImage === null ? <></> : <img src={URL.createObjectURL(selectedImage)} style={{ width: "100%", height: "70%", objectFit: "cover" }} />
                    }
                    <input type={"file"} id="btn" style={{ display: "none" }} onChange={(e) => {
                        setSelectedImage(e.target.files[0])
                    }} />
                    <button onClick={() => {
                        document.getElementById("btn").click();
                    }} style={{ margin: "auto", width: "100%", padding: "5px", fontSize: "14px", fontWeight: 500, cursor: "pointer", fontFamily: "'Poppins', sans-serif", backgroundColor: "#0095f6", border: "none" }}>Choose a photo</button>
                    {
                        selectedImage === null ? <></> : <button onClick={() => {
                            updatePic();
                        }} style={{ margin: "auto", width: "100%", padding: "5px", fontSize: "14px", fontWeight: 500, cursor: "pointer", fontFamily: "'Poppins', sans-serif", backgroundColor: "#0095f6", border: "none" }}>Upload</button>
                    }
                </Box>
            </Modal>
        </>
    )
}
