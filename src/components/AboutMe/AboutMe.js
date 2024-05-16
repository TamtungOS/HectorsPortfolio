import React from 'react'; // imports react
import { Typography, Button, Box, Avatar, Link as MuiLink, Stack, IconButton } from '@mui/material'; // imports used MUI elements
import LinkedInIcon from '@mui/icons-material/LinkedIn'; // linkedin icon from mui icons
import GitHubIcon from '@mui/icons-material/GitHub'; // github icon from mui icons
import InstagramIcon from '@mui/icons-material/Instagram'; // instagram icon from mui icons
import TwitterIcon from '@mui/icons-material/Twitter'; // twitter icon from mui icons
import TwitchIcon from '../../assets/icons/twitch.png'; // linkedin icon from src/assets/icons folder
import { keyframes } from '@mui/system'; // imports keyframes from mui/system for custom animation
import { Link } from 'react-router-dom'; // imports Link from react router
import Hector from '../../assets/images/HectorSMojicaArevalo.jpeg' // imports my picture from src/assets/images folder

/* declares my custom spin animation for page load */
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
            {/* Box component uses sx mui inline css stylings with textalign center for centering information, padding 4, and background color to paper */}
            {/* avatar component to hold my picture, alt text, src from imports, and sx mui inline css stylings with width 120units, height 120units, auto margin, and uses my custom animation for .75s duration */}
            <Avatar
            alt='Hector S Mojica Arevalo'
            src={Hector}
            sx={{ width: 120, height: 120, margin: 'auto', animation: `${spin} .75s linear`}}
            />
            <Typography variant='h4' component='h1' gutterBottom> {/* typography styling with h4 and h1 texts, gutterbottom for bottom margin */}
                Howdy! I'm Hector Samuel Mojica Arevalo
            </Typography> 
            <Typography variant='subtitle1' gutterBottom> {/* typography styling with subtitle1 texts, gutterbottom for bottom margin */}
                Undergraduate student at Cal State Fullerton pursuing a BS in Computer Science,<br/>with a passion and drive for creating stylistic and functional web applications.
            </Typography>
            {/* Button that when clicked redirects to download resume hosted on iCloud, _blank to open new tab, noopener and noreferrer to hide source information */}
            <Button variant='contained' color='primary' href='https://www.icloud.com/iclouddrive/0c9D5plsfImxlTOIkcnA38OWQ#Hector_Samuel_Mojica_Arevalo_Resume' target='_blank' rel='noopner noreferrer'>
                Download Resume
                </Button>
                {/* Stack component with row direction and .1 spacing for my social media links. contents justified center and sx styling with mt margin top 2units */}
                <Stack direction='row' spacing={.1} justifyContent='center' sx={{ mt: 2}}>
                    {/* iconbutton that links to my linkedin profile, _blank to open new tab, noopener and noreferrer to hide source information */}
                    <IconButton aria-label='LinkedIn profile' component={MuiLink} href='https://www.linkedin.com/in/hectormojica/' target='_blank' rel='noopener noreferrer'>
                        <LinkedInIcon/>
                    </IconButton>
                    {/* iconbutton that links to my github profile, _blank to open new tab, noopener and noreferrer to hide source information */}
                    <IconButton aria-label='GitHub profile' component={MuiLink} href='https://github.com/Tamtung301/' target='_blank' rel='noopener noreferrer'>
                        <GitHubIcon/>
                    </IconButton>
                    {/* iconbutton that links to my instagram profile, _blank to open new tab, noopener and noreferrer to hide source information */}
                    <IconButton aria-label='Instagram profile' component={MuiLink} href='https://www.instagram.com/_tamtung_/' target='_blank' rel='noopener noreferrer'>
                        <InstagramIcon/>
                    </IconButton>
                    {/* iconbutton that links to my twitter profile, _blank to open new tab, noopener and noreferrer to hide source information */}
                    <IconButton aria-label='Twitter profile' component={MuiLink} href='https://twitter.com/_Tamtung_' target='_blank' rel='noopener noreferrer'>
                        <TwitterIcon/>
                    </IconButton>
                    {/* iconbutton that links to my twitch profile, _blank to open new tab, noopener and noreferrer to hide source information */}
                    {/* uses box component to use my local twitch icon because there is no twitch icon within mui/icons */}
                    <IconButton aria-label='Twitch profile' href='https://twitch.tv/tamtung' target='_blank' rel='noopener noreferrer'>
                        {/* sets box to img component, sx for height 24 and width 24 to match mui/icons, alt text, and src linked to my src/assets/icons/twitch.png */}
                        <Box
                        component='img'
                        sx={{ height: 24, width: 24}}
                        alt='Twitch icon'
                        src={TwitchIcon}
                        />
                    </IconButton>
                </Stack>
                {/* button that links to my conact me page */}
                <Button component={Link} to='/contact' variant='contained' color='secondary' sx={{ mt: 2}} >
                    Contact Me
                </Button>
            </Box>
    );
}
 
export default AboutMe;