import { fabClasses } from "@mui/material";
import { useState, useEffect } from "react"

export default function ContactImage() {
const [imageFrame, setimageFrame] = useState(true)
const [counter, setCounter] = useState(0);

useEffect(() => {
const timeout = setTimeout(() => {
    setCounter(counter + 1)
}, 300)
    if(counter > 10){
        setCounter(0)
    };
    if(counter > 9){
        setimageFrame(false)
    }else{
        setimageFrame(true)
    };
},[counter])
    return(
        <main>
            <header>
                <div className={`${imageFrame ? 'content' : 'hidden'}`}>
                <img src={require('../Assets/images/Contact3.png')}/>
                </div>
                <div className={`${imageFrame ? 'hidden' : 'content'}`}>
                <img src={require('../Assets/images/Contact1.png')}/>
                </div>
            </header>
        </main>
    )
}