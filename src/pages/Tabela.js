import { useEffect, useState } from "react";
import Clock from "../components/Clock";
import Counting from "../components/countcharts/Countcharts";
import Table from "../components/Table";


function Tabela() {

    useEffect(()=> {
        const intv = setInterval(()=>{
            const time = (new Date()).toLocaleString();
            setTimeout(time);
        }, 1000);
        return ()=> clearInterval(intv)
        
    })


    const [personsList, setPersonsList] = useState([

        {
            FirstName: 'Jessica',
            LastName: 'Vaz',
            Address: 'Palma',
        },
        {
            FirstName: 'Vanessa',
            LastName: 'Soares',
            Address: 'VN',
        },
        {
            FirstName: 'Joana',
            LastName: 'Pinto',
            Address: 'Zona Ponta',
        },
        {
            FirstName: 'Carla',
            LastName: 'Da Lomba',
            Address: 'Tratxa',
        },
        {
            FirstName: "Pedro",
            LastName: "Garcia",
            Address: "Zona S",
        },
        {
            FirstName: "Pedro",
            LastName: "Garcia",
            Address: "Jamaica",
        },

    ]);
        

        function remove(pos) {
            personsList.splice(pos,1);
            setPersonsList([...personsList]);
        }
    

    return <>
        
        <h1>Tabela page</h1>
        <Clock/>
        <Table list={personsList} rm={remove}/>
        <br/>
        <Counting/>
        
    </>

}

export default Tabela;

