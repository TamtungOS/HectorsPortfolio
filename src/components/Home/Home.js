import React from "react"; // importing React
import {Box, Typography} from '@mui/material'; // imports MUI components used
// import InstagramPosts from '../InstagramPosts/InstagramPosts'; // imports the InstagramPosts component
// import Twitch from '../Twitch/Twitch'; // imports the Twitch component
import GithubRepos from '../GithubRepos/GithubRepos'; // imports the GithubRepos component
const Home = () => {

    return (
        <Box>
            <div>
            <ShowPortfolioHeader/>
            <GithubRepos />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <h1>More Coming Soon...</h1>
            </div>
        </Box>
    );
};

function ShowPortfolioHeader() {
    return (
        <Box>
            <Typography variant="h2" align="center" sx={{marginTop: '2rem'}}>Projects</Typography>
        </Box>
    );
};

export default Home;