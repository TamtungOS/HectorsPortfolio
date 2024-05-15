import React from 'react';
import { Typography, Button, Box, Avatar, Link as MuiLink, Stack, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TwitchIcon from '../../assets/icons/twitch.png';
import { keyframes } from '@mui/system';
import { Link } from 'react-router-dom';

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }`;

const AboutMe = () => {
    return (
        <Box sx={{ textAlign: 'center', p: 4, bgcolor: 'Background.paper', boxShadow: 3, borderRadius: 2}}>
            <Avatar
            alt='Hector S Mojica Arevalo'
            src='https://cvws.icloud-content.com/B/AcqyvBq_sQjaTcfPTBt0Wp7jcO-AAVfpbVrN_n6V7CagToyoOw_o_Jnb/Hector+S+Mojica+Arevalo.jpeg?o=AmuCuQKq4Who-xqEdYM6ZinAtwzVkto3D3Bvusup7lVi&v=1&x=3&a=CAogs5MIp7D4H0t30kehAb2ig4-L942s6yZ80aESb_gEt1ESbxDGmsna9zEYxvek3PcxIgEAUgTjcO-AWgTo_JnbaifNPOjYbr4e0Uz6rRGgV42cFB4MdsZaEXLfgVwd4Gpo2Hu4lTqiMfxyJ4V9UyFT02kdFBLpJ2aOHo5uqJs0eNvgwS195MmDhHMJvImH-zj67w&e=1715764542&fl=&r=bebe4923-a8eb-4a13-8c0e-f61bce469a4c-1&k=5RT8QQooM_pnvgVJqMcz0Q&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=137&s=xNWgNEI6yhEQ8cbUXakDVWs2G_A&cd=i'
            sx={{ width: 120, height: 120, margin: 'auto', animation: `${spin} .75s linear`}}
            />
            <Typography variant='h4' component='h1' gutterBottom>
                Howdy! I'm Hector Samuel Mojica Arevalo
            </Typography> 
            <Typography variant='subtitle1' gutterBottom>
                Undergraduate student as Cal State Fullerton pursuing a BS in Computer Science,<br/>with a passion and drive for creating stylistic and functional web applications.
            </Typography>
            <Button variant='contained' color='primary' href='https://www.icloud.com/iclouddrive/0c9D5plsfImxlTOIkcnA38OWQ#Hector_Samuel_Mojica_Arevalo_Resume' target='_blank' rel='noopner noreferrer'>
                Download Resume
                </Button>
                <Stack direction='row' spacing={.1} justifyContent='center' sx={{ mt: 2}}>
                    <IconButton aria-label='LinkedIn profile' component={MuiLink} href='https://www.linkedin.com/in/hectormojica/' target='_blank' rel='noopener noreferrer'>
                        <LinkedInIcon/>
                    </IconButton>
                    <IconButton aria-label='GitHub profile' component={MuiLink} href='https://github.com/Tamtung301/' target='_blank' rel='noopener noreferrer'>
                        <GitHubIcon/>
                    </IconButton>
                    <IconButton aria-label='Instagram profile' component={MuiLink} href='https://www.instagram.com/_tamtung_/' target='_blank' rel='noopener noreferrer'>
                        <InstagramIcon/>
                    </IconButton>
                    <IconButton aria-label='Twitter profile' component={MuiLink} href='https://twitter.com/_Tamtung_' target='_blank' rel='noopener noreferrer'>
                        <TwitterIcon/>
                    </IconButton>
                    <IconButton aria-label='Twitch profile' href='https://twitch.tv/tamtung' target='_blank' rel='noopener noreferrer'>
                        <Box
                        component='img'
                        sx={{ height: 24, width: 24}}
                        alt='Twitch icon'
                        src={TwitchIcon}
                        />
                    </IconButton>
                </Stack>
                <Button component={Link} to='/contact' variant='contained' color='secondary' sx={{ mt: 2}} >
                    Contact Me
                </Button>
            </Box>
    );
}
 
export default AboutMe;