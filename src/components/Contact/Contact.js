import React, { useState } from 'react'; // imports react and usestate hook from react
import { Box, Button, TextField, Typography, Slide } from '@mui/material'; // imports used elements from mui

// defines contact arrow function
const Contact = () => {
    // const [formData, setFormData] = useState({ // uses UseState to manage form data state
    //     name: '', // sets initial state for name
    //     email: '', // sets initial state for email
    //     message: '' // sets initial state for message
    // });

    // // arrow event function that handles input changes
    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value // updates name field with new value
    //     });
    // };

    // //  function that handles form submission, submit button just outputs message information to console. press F12 to view
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('Message submitted!', formData); // logs message succesful and information to console
    //     alert('Your message has been sent. I\'ll get back to you shortly!') // alert window that tells user that their message was sent
    //     setFormData({
    //         name: '', // resets name field
    //         email: '', // rests email field
    //         message: '' // resets message field
    //     })


    return (
        <Box sx={{ maxWidth: 600, mx: 'auto', p: 4, bgcolor: 'background.paper', boxShadow: 3, borderRadius: 2 }}>
            <Typography variant='h4' component='h1' gutterBottom>
                Contact Me
            </Typography>
            <Button
                sx = {{ marginBottom: 1}}
                variant='contained'
                color='primary'
                onClick={() => {
                    if (window.confirm('Do you want to open your email client to send me an email?')) {
                        window.location.href = 'mailto:Hector@devmojica.org';
                    }
                }}
            >
                Email: Hector@devmojica.org
            </Button>
            <Typography variant='body1'>
                Contact me page under construction, please check back later.
            </Typography>
        </Box>
    );
}
export default Contact;
