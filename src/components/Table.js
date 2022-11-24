

function Table(props) {


    return <table border="1">

        <thead>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender Name</th>
        </thead>
        <tbody>
            {props.list.map((person, i) =>
                <tr key={i}>
                    <td>{person.FirstName}</td>
                    <td>{person.LastName}</td>
                    <td>{person.Address}</td>
                    <td>
                        <button onClick={()=>props.rm(i)}>Remove</button>
                    </td>
                </tr>
            )}
        </tbody>

    </table>
}

export default Table;
