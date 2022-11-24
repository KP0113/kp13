import { useRef, useState } from "react";

function TodoList() {

    const input = useRef();
    const [tasks, setTasks] = useState([]);

    function add() {
        let newTask = input.current.value;
        tasks.push(newTask);

        console.log(tasks);

        setTasks([...tasks]);

        input.current.value = '';
    }
    const del = i => {
        tasks.splice(i, 1);
        console.log(tasks);
        const newTask = [...tasks];
        setTasks(newTask);
    }

    return <>
        <h1>Todo Component</h1>

        <input ref={input} type='text' placeholder="Write task" />

        <button onClick={add}>Acicionar</button>

        <ul>
            {tasks.map((task, i) =>
                <li key={i}>
                    {task} 
                    <button onClick={(e)=>del(i)}>Delete</button>
                </li>

            )}
        </ul>
    </>

}

export default TodoList;