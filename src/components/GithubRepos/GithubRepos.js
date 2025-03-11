import react from 'react';
import { useEffect, useState } from 'react';
// import axios from 'axios';
import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

const GithubRepos = () => {
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
        <Carousel
            navButtonsAlwaysVisible
            autoPlay={false}
            indicators={true}
            animation="slide"
        >
            {githubData && githubData.map((repo, index) => (
                <Card key={index} sx={{ marginBottom: '1rem', marginLeft: "auto", marginRight: "auto", width: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <CardContent>
                        <Typography variant="h6" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {repo.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" sx={{ mt: 2, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2 }}>
                            {repo.description}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center' }}>
                        <Button size="small" color="primary" href={repo.html_url} target="_blank">View repository</Button>
                    </CardActions>
                </Card>
            ))}
        </Carousel>
    );
}

export default GithubRepos;