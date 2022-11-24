import { useState } from "react";

function Pagination2(){

    const list = ['A', 'B', 'C', 'D'];
    const [text, setText] = useState(list[0]);
    let [currentPosition, setPos] = useState(0);

    function next() {
        if(currentPosition < list.length -1 ){
            const nextPos = currentPosition+1;
            setPos(nextPos);
            setText(list[nextPos]);
        }else {
            alert ("That's the far you can go")
        }
    }

    function previous (){
        if(currentPosition > 0 ){
            const prevPos = currentPosition -1;
            setPos(prevPos);
            setText(list[prevPos]);
        } else {
            alert('We hit the lowest charater')
        }
        
    }

    return <>
        <button onClick={previous}>Previous</button>
        <b>{text}</b>
        <button onClick={next}>Next</button>
    </>

}

export default Pagination2;