import { useRef, useState } from "react";
import './Addcontact.css';

function Addcontacts() {

    const nameRef = useRef();
    const phoneRef = useRef();
    const [contactList, setcontactList] = useState([]);
    const searchRef = useRef();
    const [searchResult, setSearchResult] = useState([]);
    const [resultActive, setResultActive] = useState(false)


    function add() {
        const name = nameRef.current.value;
        const phone = phoneRef.current.value;

        const foundContact = contactList.find(contact => contact.name==name);

        if(foundContact!=undefined) {
            alert('Contact with name '+ name + ' is already exists.');
            return;
        }

        const newContact = {
            name: name,
            phone: phone,
            createdAt : new Date()
        }

        contactList.push(newContact);
        setcontactList([...contactList]);
        nameRef.current.value=null;
        phoneRef.current.value=null;
    }

    function editContact() {
        const contact = contactList;
        nameRef.current.value = contact.name;
        phoneRef.current.value = contact.phone;
    }



    function search() {
        let results = [];
        const searchValue = searchRef.current.value;
        
        for (let contact of contactList) {
            if(contact.name.toLowerCase().includes(searchValue.toLowerCase())) {
                results.push(contact);
            }
        }
        setSearchResult(results);
        setResultActive(true);
    }

    function clearSearch() {
        searchRef.current.value=null;
        setSearchResult([]);
        setResultActive(false);
    }

    function removeContact(i) {
        contactList.splice(i, 1);
        setcontactList([...contactList]);
    }

    function resultMessage() {
        if(resultActive && searchResult.length>0) {
            return searchResult.length + 'results found!';
        } else if (resultActive && searchResult.length==0) {
            return 'No results found!';
        }
    }

    return <div className="wrapper">
        <div className="left">
            <div>
                <label>
                    Name:
                    <input ref={nameRef} type="text" />
                </label>
            </div>
            <div>
                <label>
                    Phone:
                    <input ref={phoneRef} type="tel" />
                </label>
                <button onClick={add}>Add</button>
            </div>

            <h4>My contact list:</h4>
            {contactList.map((contact, i)=>
                <div key={i} className="phoneBook-item">
                    Name: {contact.name}<br/>
                    Phone: {contact.phone}<br/>
                    Created at : {contact.createdAt.tolocaleString()}<br/>
                    <button onClick={()=>editContact(i)}>Edit</button>
                    <button onClick={()=>removeContact(i)}>Delete</button>
                    
                </div>
            )}
        </div>

        <div className="right">
            <input ref={searchRef} type="text" />
            <button onClick={search}>Search</button>
            <button onClick={clearSearch}>Clear</button>


            <h4>Search result:</h4>
            {resultActive && searchResult.length > 0 && <span>
                    {searchResult.length} matches found
                </span>}

            {resultActive && searchResult.length== 0 && <span>
                No results found!
                </span>}

            <span>{resultMessage()}</span>


            {searchResult.map((contact, i)=>
                <div key={i} className="phoneBook-item">
                    Name: {contact.name}<br/>
                    Phone: {contact.phone}
                </div>
            )}
            
        </div>
    </div>

    
    
}

export default Addcontacts;