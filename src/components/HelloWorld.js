import { useRef, useState } from "react";

function HelloWorld() {

    const input = useRef();
    const [text, setText] = useState('');

    function present() {
        const userText = input.current.value;
        setText(userText)
    }

    return <>
        <input ref={input} type='text' />
        <button onClick={present}>Present</button>
        <b>{text}</b>
    </>

}

export default HelloWorld;