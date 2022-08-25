import React, { useState, useMemo } from "react";

function UserFullName(name: string, surname: string) {
  const user = { name, surname };
  alert(JSON.stringify(user));
  return user;
}

function FullNameWithClicker() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [counter, setCounter] = useState(0);

  const user = useMemo(() => UserFullName(name, surname), [name, surname]);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>
        Clicked {counter} times
      </button>
      <br />
      <input
        type="text"
        value={name}
        onChange={(evt) => setName(evt.target.value)}
      />
      <br />
      <input
        type="text"
        value={surname}
        onChange={(evt) => setSurname(evt.target.value)}
      />
      <p>{name + " " + surname}</p>
    </div>
  );
}

export default FullNameWithClicker;
