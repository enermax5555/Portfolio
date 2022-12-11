import * as React from "react";
import { Box, TextField, Grid} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";


export default function ContactForm() {

    return (
        <main>
            <form>
            <AccountCircle sx={{ color: 'white'}} />
                <div className='grid grid-rows-4'>
                    
       
       <div className='space-x-4 mt-10'>
        <TextField sx={{
        "& .MuiInputBase-root": {
            color: 'white'
        },
        "& .MuiFormLabel-root": {
            color: 'white'
        },
        }}
        id="input-with-sx" label="Enter your name" variant="filled"  />
        <TextField sx={{
        "& .MuiInputBase-root": {
            color: 'white'
        },
        "& .MuiFormLabel-root": {
            color: 'white'
        },
        }}
        id="input-with-sx" label="Enter your email" variant="filled"  />
        </div>
        <TextField sx={{
        "& .MuiInputBase-root": {
            color: 'white'
        },
        "& .MuiFormLabel-root": {
            color: 'white'
        },
        }}
        id="input-with-sx" multiline rows={4} label="Enter your email" variant="filled"  />
        </div>
        </form>
        </main>
    )

}
