import { useState } from "react";
import "./ObjectArray.css";

function ObjectArray() {
  const Contacts = [
    {
      name: "Suzana",
      age: "44",
      phone: "9119191",
      bio: "Likes Music",
    },
    {
      name: "Jessica",
      age: "18",
      phone: "9229292",
      bio: "Likes Boxing",
    },
    {
      name: "Vanessa",
      age: "24",
      phone: "9339393",
      bio: "Likes Dancing",
    },
    {
      name: "MC Panki",
      age: "28",
      phone: "9449494",
      bio: "Likes Singing",
    },
  ];

  let [pos, setPos] = useState(0);

  function next() {
    if (pos < Contacts.length - 1) {
      setPos(pos + 1);
    } else {
      alert("You Can't Go Farther");
    }
  }

  function previous() {
    if (pos > 0) {
      setPos(pos - 1);
    } else {
      alert("That's It Nigga");
    }
  }

  function isSelected(i) {
    return i == pos ? "selected" : "";
  }

  return (
    <>
      <div className="menu">
        {Contacts.map((person, i) => (
          <div className={isSelected(i)} key={i} onClick={(e) => setPos(i)}>
            {person.name}
          </div>
        ))}
      </div>

      <div></div>
      <div className="display-info">
        <button onClick={previous}>Previous</button>

        <div className="main">
          Name: {Contacts[pos].name} <br />
          Age: {Contacts[pos].age} <br />
          Bio: {Contacts[pos].bio} <br />
        </div>

        <button onClick={next}>Next</button>
      </div>
    </>
  );
}
export default ObjectArray;
