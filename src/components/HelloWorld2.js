import { useRef, useState } from "react";

function HelloWorld2() {

    const input = useRef();
    const [text, setText] = useState('');

    function present() {
        const userText = input.current.value;
        setText(userText)
    }

    return <>
        <input ref={input} type='text' onChange={present}/>
        <b>{text}</b>
    </>

}

export default HelloWorld2;