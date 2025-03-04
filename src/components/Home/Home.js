import React from "react"; // importing React
import {Box, Typography, Button, Card, CardContent, CardActions, Stack} from '@mui/material'; // imports MUI components used
import Fade from '@mui/material/Fade'; // imports fade animation from MUI/Fade for animating the projects card
import {useEffect, useState} from 'react';
import './Home.css' // imports the css file for the Home component

const Home = () => {
    const [githubData, setGithubData] = useState(null);

    const fetchGitHubData = async () => {
        return fetch('https://api.github.com/users/TamtungOS/repos')
        .then((response) => response.json())
        .then((data) => (
            setGithubData(data)
            )
        );
    }

    useEffect(() => {
        fetchGitHubData();
    }
    , []);

    return (
        <Box>
            <ShowPortfolioHeader githubData={githubData} />
            <ShowProjects githubData={githubData} repos={[null]} />
        </Box>
    );
};

function ShowPortfolioHeader(githubData) {
    return (
        <Box>
            <Typography variant="h2" align="center" sx={{marginTop: '2rem'}}>Projects</Typography>
        </Box>
    );
};

function ShowProjects({githubData},) {
return (
    <Box>
    <Fade in={true} style={{ transformOrigin: 'center'}} timeout={1500}>
        <Stack direction='row' spacing={2} justifyContent='center' sx={{mt: 2, overflow: 'hidden', textOverflow: 'ellipsis', WebkitLineClamp: 2}}>
            {githubData && githubData.map((repo, index) => (
                <Card key={index} sx={{marginBottom: '1rem', width: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <CardContent>
                        <Typography variant="h6" sx={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>
                            {repo.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" sx={{mt: 2, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2}}>
                            {repo.description}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{justifyContent: 'center'}}>
                        <Button size="small" color="primary" href={repo.html_url} target="_blank">View repository</Button>
                    </CardActions>
                </Card>
            ))}
        </Stack>
    </Fade>
    </Box>
);
}

export default Home;