import { useRef, useState } from "react";

function Login() {
  const users = [
    {
      user: "Thor",
      password: "Playboy",
    },
    {
      user: "Bruce Banner",
      password: "Stronggestavenger",
    },
    {
      user: "Tony Stark",
      password: "Richestavenger",
    },
  ];

  const userInput = useRef();
  const passwordInput = useRef();
  const [message, setMessage] = useState("");

  function authentication() {
    const user = userInput.current.value;
    const password = passwordInput.current.value;

    for (let access of users) {
      if (access.user == user && access.password == password) {
          alert("Welcome back" + " Avenger " + user + "!");
          return;
      }
    }
    setMessage("Incorrect credentials!");
  }
  

  return (
    <>
      <div>
        <label>User</label>
        <br />
        <input ref={userInput} type="text" />
      </div>
      <div>
        <label>Password</label>
        <br />
        <input ref={passwordInput} type="password" />
      </div>

      <button onClick={authentication}>login</button>
      <br />
      {message && <div className="alert">{message}</div>}
    </>
  );
}

export default Login;
