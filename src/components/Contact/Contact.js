import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Slide } from '@mui/material';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Message submitted!', formData);
        alert('Your message has been sent. I\'ll get back to you shortly!')
        setFormData({
            name: '',
            email: '',
            message: ''
        })
    };

    return (
        <Slide direction='down' in={true} mountOnEnter timeout={{ enter: 500}}>
        <Box sx={{ maxWidth: 600, mx: 'auto', p: 4, bgcolor: 'background.paper', boxShadow: 3, borderRadius: 2 }}>
            <Typography variant='h4' component='h1' gutterBottom>
                Contact Me
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    margin='normal'
                    label='Name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <TextField
                    fullWidth
                    margin='normal'
                    label='Email'
                    name='email'
                    type='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <TextField
                    fullWidth
                    margin='normal'
                    label='Message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    required
                />
                <Button type='submit' variant='contained' color='primary' sx={{ mt: 2 }}>
                    Submit
                </Button>
            </form>
        </Box>
        </Slide>
    );
};

export default Contact;
