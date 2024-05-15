import React from "react";
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Stack} from '@mui/material';
import screenshot from '../../assets/images/quiz-screenshot.png';
import Fade from '@mui/material/Fade';

const Home = () => {
    return (
        <Box sx={{ textAlign: 'center', p: 4 }}>
            <Typography variant="h2" component="h1" gutterBottom>
                Welcome to My Portfolio
            </Typography>
            <Typography variant="h5" component="p" gutterBottom>
                Explore my projects and get in touch!
            </Typography>
            {/* Quiz Project Section */}
            <Fade in={true} style={{ transformOrigin: 'center'}} timeout={1500}>
            <Stack direction='row' spacing={2} justifyContent='center' sx={{mt: 2}}>
                <Card sx={{ maxWidth: 345, mx: 'auto', my: 4}}>
                <CardMedia
                component='img'
                height='140'
                image={screenshot}
                alt='Quiz Project Screenshot'
                />
                <CardContent>
                    <Typography variant='h5' component='div' gutterBottom>
                        Quiz Project
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                    This project is a simple quiz application that allows users to register, answer quiz questions, and view their score at the end.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small' color='primary' href='https://github.com/Tamtung301/Quiz-Project' target="_blank" rel="noopener noreferrer">
                        View on GitHub
                    </Button>
                </CardActions>
            </Card>
            {/* More Coming Soon Section */}
            <Card sx={{ maxWidth: 345, mx: 'auto', my: 4 }}>
                <CardContent sx={{ display:'flex', alignItems: 'center', minHeight: 250}}>
                    <Typography gutterBottom variant="h5" component="div">
                        More coming soon...
                    </Typography>
                </CardContent>
            </Card>
            </Stack>
            </Fade>
        </Box>
    );
}
 
export default Home;