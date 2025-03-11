import React from 'react'; // imports react
import { AppBar, Toolbar, Typography, Button } from '@mui/material'; // imports MUI elements used
import { Link } from 'react-router-dom'; // imports Link from react router

const Navbar = () => {
    return ( 
        <AppBar position='static'> {/* uses AppBar to set navbar as top nav bar, positioned statically */}
            <Toolbar> {/* toolbar wraps the bottom content for the appbar */}
                <Typography variant='h6' sx={{flexGrow: 1}}> {/* typography styling with h6 style and sx is inline mui css styling with flexgrow so items are to the right */}
                    Hector's Portfolio
                </Typography>
                <Button color='inherit' component={Link} to='/'> {/* Button that inherits color from parent and links button to home component */}
                    Home
                </Button>
                <Button color='inherit' component={Link} to='/contact'> {/* Button that inherits color from parent and links button to contact component */}
                    Contact
                </Button>
                <Button color='inherit' component={Link} to='/aboutme'> {/* Button that inherits color from parent and links button to aboutme component */}
                    Me
                </Button>
            </Toolbar>
        </AppBar>
     );
}
 
export default Navbar;