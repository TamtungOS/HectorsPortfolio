import React, { useState } from 'react'; // imports react and usestate hook from react
import { Box, Button, TextField, Typography, Slide } from '@mui/material'; // imports used elements from mui

// defines contact arrow function
const Contact = () => {
    const [formData, setFormData] = useState({ // uses UseState to manage form data state
        name: '', // sets initial state for name
        email: '', // sets initial state for email
        message: '' // sets initial state for message
    });

    // arrow event function that handles input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value // updates name field with new value
        });
    };

    //  function that handles form submission, submit button just outputs message information to console. press F12 to view
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Message submitted!', formData); // logs message succesful and information to console
        alert('Your message has been sent. I\'ll get back to you shortly!') // alert window that tells user that their message was sent
        setFormData({
            name: '', // resets name field
            email: '', // rests email field
            message: '' // resets message field
        })
    };

    return (
        /* applies slide down animation to entire contact box. animation slides down on load using mountOnEnter with a timeout enter duration of 500ms */
        <Slide direction='down' in={true} mountOnEnter timeout={{ enter: 500}}> 
        <Box sx={{ maxWidth: 600, mx: 'auto', p: 4, bgcolor: 'background.paper', boxShadow: 3, borderRadius: 2 }}>
            {/* set box sx mui inline css styling with maxwidth 600units, mx margin left/right to auto, padding 4units, with background color paper */}
            <Typography variant='h4' component='h1' gutterBottom> {/* typography with h4 styling with an h1 for smaller text if needed, gutterbottom for bottom margin*/}
                Contact Me
            </Typography>
            <form onSubmit={handleSubmit}> {/* form for submitting and handling submit */}
                <TextField
                    fullWidth // text will take up full width
                    margin='normal' // normal margins for text field
                    label='Name' // label name is Name
                    name='name' // name attribute
                    value={formData.name} // set value of name from the state
                    onChange={handleChange} // handles change
                    required // requires name text
                />
                <TextField
                    fullWidth // text takes up full width
                    margin='normal' // normal margins
                    label='Email' // label Email
                    name='email' // name attribute
                    type='email' // sets text field type to email, requiring "@" within text
                    value={formData.email} // sets value of name from the state
                    onChange={handleChange} // handles change
                    required // requires email input
                />
                <TextField
                    fullWidth
                    margin='normal' // normal margins
                    label='Message' // label message
                    name='message' // name attribute
                    value={formData.message} // sets value of name from state
                    onChange={handleChange} // handles change
                    multiline // allows multiline input
                    rows={4} // 4 rows for the input box
                    required // required for submission
                />
                <Button type='submit' variant='contained' color='primary' sx={{ mt: 2 }}>
                    {/* styles Submit button with sx mui inline css styles for contained variant, primary colors, and top margin */}
                    Submit
                </Button>
            </form>
        </Box>
        </Slide>
    );
};

export default Contact;
