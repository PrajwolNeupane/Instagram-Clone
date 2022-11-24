import { InputBase, Stack, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'

export default function Login() {

    const [loginData, setLoginData] = useState({});
    const [signupData, setSignUpData] = useState({});
    const [isLogin, setLogin] = useState(true);

    const onChange = (e) => {
        if (isLogin) {
            setLoginData({
                ...loginData,
                [e.target.name]: e.target.value
            });
        } else {
            setSignUpData({
                ...signupData,
                [e.target.name]: e.target.value
            })
        }
    }

    useEffect(() => {
    }, []);

    return (
        <Stack sx={{ width: "100%", height: "100vh", backgroundColor: "whiteShade.light", alignItems: "center", justifyContent: "center", gap: "10px" }}>
            {
                isLogin === true ?
                    <Stack sx={{ backgroundColor: "white", width: { lg: "25%", md: "35%", sm: "50%", xs: "70%" }, height: "400px", border: "1px #9eaaba solid", borderRadius: "2px", padding: { lg: "40px 60px", md: "40px 30px", sm: "40px 30px", xs: "40px 30px" }, justifyContent: "space-between" }}>
                        <Typography variant='h2' sx={{ color: "text.main", fontSize: { lg: "60px", md: "50px", sm: "40px", xs: "40px" }, textAlign: "center" }}>Instagram Clone</Typography>
                        <InputBase placeholder='Email' sx={{ fontSize: "12px", color: "text.main", backgroundColor: "whiteShade.light", border: "1px #9eaaba solid", borderRadius: "2px", padding: "5px 10px" }} name="email" onChange={onChange} />
                        <InputBase placeholder='Password' sx={{ fontSize: "12px", color: "text.main", backgroundColor: "whiteShade.light", border: "1px #9eaaba solid", borderRadius: "2px", padding: "5px 10px" }} type='password' name="password" onChange={onChange} />
                        <button style={{ backgroundColor: '#0074cc', border: "none", borderRadius: "5px", padding: "8px", fontSize: "14px", fontWeight: 600, color: "white", cursor: "pointer" }}>Log in</button>
                        <Typography variant='h4' sx={{ color: "text.main", fontSize: "14px" }}>Don't have an account? <span style={{ color: "#0074cc", fontWeight: 600, cursor: "pointer" }} onClick={() => {
                            setLogin(false);
                        }}>Sign up</span></Typography>
                    </Stack>
                    :
                    <Stack sx={{ backgroundColor: "white", width: { lg: "25%", md: "35%", sm: "50%", xs: "70%" }, height: "400px", border: "1px #9eaaba solid", borderRadius: "2px", padding: { lg: "40px 60px", md: "40px 30px", sm: "40px 30px", xs: "40px 30px" }, justifyContent: "space-between" }}>
                        <Typography variant='h2' sx={{ color: "text.main", fontSize: { lg: "60px", md: "50px", sm: "40px", xs: "40px" }, textAlign: "center" }}>Instagram Clone</Typography>
                        <InputBase placeholder='Name' sx={{ fontSize: "12px", color: "text.main", backgroundColor: "whiteShade.light", border: "1px #9eaaba solid", borderRadius: "2px", padding: "5px 10px" }} name="name" onChange={onChange} />
                        <InputBase placeholder='Email' sx={{ fontSize: "12px", color: "text.main", backgroundColor: "whiteShade.light", border: "1px #9eaaba solid", borderRadius: "2px", padding: "5px 10px" }} name="email" onChange={onChange} />
                        <InputBase placeholder='Password' sx={{ fontSize: "12px", color: "text.main", backgroundColor: "whiteShade.light", border: "1px #9eaaba solid", borderRadius: "2px", padding: "5px 10px" }} type='password' name="password" onChange={onChange} />
                        <button style={{ backgroundColor: '#0074cc', border: "none", borderRadius: "5px", padding: "8px", fontSize: "14px", fontWeight: 600, color: "white", cursor: "pointer" }}>Log in</button>
                        <Typography variant='h4' sx={{ color: "text.main", fontSize: "14px" }}>Have an account? <span style={{ color: "#0074cc", fontWeight: 600, cursor: "pointer" }} onClick={() => {
                            setLogin(true);
                        }}>Log in</span></Typography>
                    </Stack>
            }
            <Typography sx={{ color: "text.main", fontSize: "16px", cursor: "pointer" }} variant='h4' >Log in as guest</Typography>
        </Stack>
    )
}
