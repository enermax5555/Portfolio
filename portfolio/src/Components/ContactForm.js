import * as React from "react";
import { Box, TextField, Grid} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import emailjs from 'emailjs-com'
import { useRef } from "react";
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
export default function ContactForm() {
    const form=useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    emailjs.sendForm('portfolio_service', 'portfolio_form', form.current, '_ZuCaNlgv1P8lkjzI')
    .then((result) => {
        console.log('SUCCSES! :', result.text);
        alert('SUCCESS!');
    }, (error) => {
        console.log('Failed :', error.text);
        alert('Failed... :(. \n Try again later!');
    });
e.target.reset()
};
    return (
        <main className="font-montserrat">
                <form ref={form} onSubmit={sendEmail}>
            <AccountCircle sx={{ color: 'white'}} />
                <div className='m-5 space-y-5'>
        <TextField sx={{
        "& .MuiInputBase-root": {
            color: 'white'
        },
        "& .MuiFormLabel-root": {
            color: 'white'
        },
        }}
        name="user_name" label="Enter your name" variant="filled" fullWidth />
        <TextField sx={{
        "& .MuiInputBase-root": {
            color: 'white'
        },
        "& .MuiFormLabel-root": {
            color: 'white'
        },
        }}
        name="user_email" label="Enter your email" variant="filled" fullWidth  />
        <TextField sx={{
        "& .MuiInputBase-root": {
            color: 'white'
        },
        "& .MuiFormLabel-root": {
            color: 'white'
        },
        }}
        name="message" multiline rows={5} fullWidth label="Enter your message" variant="filled"  />
        <Button variant="contained" type='submit' value='Send' endIcon={<SendIcon />}>
        Send
        </Button>
        </div>

        </form>
        </main>
    )

}
