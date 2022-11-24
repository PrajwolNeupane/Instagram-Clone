import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'

export default function RightSuggetionBar() {

    const image = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';


    return (
        <Stack sx={{ position: "fixed", right: "0px", height: "96vh", backgroundColor: "whiteShade.light", width: "25%" ,padding:"2% 80px 2% 20px",gap:"10px",display:{md:"flex",sm:"none",xs:"none"}}}>
            <Stack sx={{ flexDirection: "row",gap:"10px",alignItems:"center" }}>
                <Avatar src={image} sx={{ width: "45px", height: "45px" ,border:"2px #9eaaba solid"}} />
                <Stack>
                    <Typography variant='h3' sx={{fontSize:"15px",color:"text.main"}}>Prajwol Neupane</Typography>
                    <Typography variant='h4' sx={{fontSize:"14px",color:"text.light"}}>prajwolneupane68@gmail.com</Typography>
                </Stack>
            </Stack>
            <Typography variant='h3' sx={{fontSize:"15px",color:"text.light"}}>Suggestion for you</Typography>
            <Stack sx={{flexDirection:"row",alignItems:"center",width:"100%",justifyContent:"space-between"}}>
                <Avatar src={image} sx={{cursor:"pointer"}}/>
                <Typography  variant='h3' sx={{fontSize:"15px",color:"text.main",position:"absolute",left:"70px",cursor:"pointer"}}>Prajwol Neupane</Typography>
                <Typography  variant='h3' sx={{fontSize:"14px",color:"blueShade.light",position:"0px",cursor:"pointer"}}>Follow</Typography>
            </Stack>
            <Stack sx={{flexDirection:"row",alignItems:"center",width:"100%",justifyContent:"space-between"}}>
                <Avatar src={image} sx={{cursor:"pointer"}}/>
                <Typography  variant='h3' sx={{fontSize:"15px",color:"text.main",position:"absolute",left:"70px",cursor:"pointer"}}>Prajwol Neupane</Typography>
                <Typography  variant='h3' sx={{fontSize:"14px",color:"blueShade.light",position:"0px",cursor:"pointer"}}>Follow</Typography>
            </Stack>
            <Stack sx={{flexDirection:"row",alignItems:"center",width:"100%",justifyContent:"space-between"}}>
                <Avatar src={image} sx={{cursor:"pointer"}}/>
                <Typography  variant='h3' sx={{fontSize:"15px",color:"text.main",position:"absolute",left:"70px",cursor:"pointer"}}>Prajwol Neupane</Typography>
                <Typography  variant='h3' sx={{fontSize:"14px",color:"blueShade.light",position:"0px",cursor:"pointer"}}>Follow</Typography>
            </Stack>
            <Stack sx={{flexDirection:"row",alignItems:"center",width:"100%",justifyContent:"space-between"}}>
                <Avatar src={image} sx={{cursor:"pointer"}}/>
                <Typography  variant='h3' sx={{fontSize:"15px",color:"text.main",position:"absolute",left:"70px",cursor:"pointer"}}>Prajwol Neupane</Typography>
                <Typography  variant='h3' sx={{fontSize:"14px",color:"blueShade.light",position:"0px",cursor:"pointer"}}>Follow</Typography>
            </Stack>
            <Stack sx={{flexDirection:"row",alignItems:"center",width:"100%",justifyContent:"space-between"}}>
                <Avatar src={image} sx={{cursor:"pointer"}}/>
                <Typography  variant='h3' sx={{fontSize:"15px",color:"text.main",position:"absolute",left:"70px",cursor:"pointer"}}>Prajwol Neupane</Typography>
                <Typography  variant='h3' sx={{fontSize:"14px",color:"blueShade.light",position:"0px",cursor:"pointer"}}>Follow</Typography>
            </Stack>
        </Stack>
    )
}
