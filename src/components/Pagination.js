
function pagination(){

    const list = ['1', '2', '3', '4'];
    const[text, setText] = useState(list[0]);

    function next () {
        setPos = currentP;
        setText(list[nextPos]);
    }

    return <>

        <button onClick={''}>after</button>
        <span onClick={input} type='text' />
        <button onClick={''}> Next</button>

    </>

}
export default pagination;