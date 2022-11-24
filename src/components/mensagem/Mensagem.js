import { useEffect, useRef, useState } from "react";

function Mensagem(){

    const input = useRef();
    const [message, setMessage] = useState('');

    useEffect(()=>{
        console.log('Component Refreshed');
        return()=> console.log('Component Removed');
    });

    function updateMsg(){
        setMessage(input.current.value);
    }

    return (
        <div>
            <input ref={input} type="text" onChange={updateMsg}/>
            <span>{message}</span>
        </div>
    )
}

export default Mensagem;