import React from "react"; // importing React
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Stack} from '@mui/material'; // imports MUI components used
import screenshot from '../../assets/images/quiz-screenshot.png'; // imports screenshot of my quiz project for the project card
import Fade from '@mui/material/Fade'; // imports fade animation from MUI/Fade for animating the projects card

const Home = () => {
    return (
        <Box sx={{ textAlign: 'center', p: 4 }}> {/* Using box component for my containers, textalign centers the text and items within, p adds a padding of 4 units */}
            <Typography variant="h2" component="h1" gutterBottom> {/* uses typography for consistent text styling, with an h1 format and gutterBottom that adds a bottom margin */}
                Welcome to My Portfolio
            </Typography>
            <Typography variant="h5" component="p" gutterBottom> {/* uses typography for consistent text styling, with an h5 format and gutterBottom that adds a bottom margin */}
                Explore my projects and get in touch!
            </Typography>
            {/* Quiz Project Section */}
            {/* Fade in animation that fades in from the center of the card stack at 1500ms */}
            <Fade in={true} style={{ transformOrigin: 'center'}} timeout={1500}>
            <Stack direction='row' spacing={2} justifyContent='center' sx={{mt: 2}}> {/* Stack component that displays the projects as a row, with 2unit spacing, contents justified by center
                                                                                            with margin top 2units */}
                <Card sx={{ maxWidth: 345, mx: 'auto', my: 4}}> {/* Card with a max width of 345units, with margin left/right set to auto with margin top/bottom 2units */}
                <CardMedia
                component='img' /* defines card media as image */
                height='140' /* card is 140units */
                image={screenshot} /* sets source for image as my screenshot that was imported */
                alt='Quiz Project Screenshot' /* alt text for screenshot */
                />
                <CardContent>
                    <Typography variant='h5' component='div' gutterBottom> {/* typography styling with h5 in a <div> with gutterbottom for bottom margins */}
                        Quiz Project
                    </Typography>
                    <Typography variant='body2' color='text.secondary'> {/* typography spacing with body2 styling, color is secondary for text */}
                    This project is a simple quiz application that allows users to register, answer quiz questions, and view their score at the end.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small' color='primary' href='https://github.com/Tamtung301/Quiz-Project' target="_blank" rel="noopener noreferrer">
                        {/* button to open project repo on github, target=_blank opens in new tab, rel=noopener noreferrer hides information from the original tab of my portfolio site*/}
                        View on GitHub
                    </Button>
                </CardActions>
            </Card>
            {/* More Coming Soon Section */}
            <Card sx={{ maxWidth: 345, mx: 'auto', my: 4 }}> {/* card with inline styling by sx, maxwidth to 345units, mx is margin left/right auto dependent on window, my margin top/bottom 4units*/}
                <CardContent sx={{ display:'flex', alignItems: 'center', minHeight: 250}}>
                    {/* sx inline styling for flex and alignitems center so my "more coming soon..." message centered in the empty card */}
                    <Typography variant="h5" component="div" gutterBottom>
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