import { useRef, useState } from "react";


function Counting(){
    
    const [numChars, setNumChars]= useState(0);
    const [numWords, setNumWords]= useState(0);
    const findWordRef = useRef();
    const textAreaRef = useRef();
    const [wordRepeated, setWordRepeated] = useState(0);

    function contar(event){
        
        const text = event.target.value;
        
        const numberOfChars = text.length
        const numberOfWords = text.split(' ').length;

        setNumChars(numberOfChars);
        setNumWords(numberOfWords);
       
    }

    function findWordCount(){
        const text = textAreaRef.current.value;
        const WordToFind = findWordRef.current.value;
        const words = text.split(' ');
        const repeated = words.filter(word=>word==WordToFind);
        const repeatednum = repeated.length;

        setWordRepeated(repeatednum);
    }

    return <>
    
        <textarea style={{width:300, height:100}}
             onChange={contar}></textarea><br/> 
        <span>Number of charaters : {numChars}</span><br/> 
        <span>Number of words : {numWords}</span> 
        <br/>
        <input type="text" ref={findWordRef}></input>
        <button>Search</button><br/>
        <span>{findWordCount}</span><br/>  
        <button onClick={findWordCount}>Count</button>
        <span>{wordRepeated}</span>
                                      
    </>
}

export default Counting;