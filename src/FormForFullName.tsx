import React, { useState, useRef } from "react";

function FormForFullName() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const nameInputRef: any = useRef();
  const surnameInputRef: any = useRef();

  const handlerKeyUp1 = (evt: any) => {
    if (evt.key === "Enter") {
      surnameInputRef.current.focus();
    }
  };

  const handlerKeyUp2 = (evt: any) => {
    if (evt.key === "Enter") {
      nameInputRef.current.focus();
    }
  };

  return (
    <form>
      <input
        ref={nameInputRef}
        type="text"
        placeholder="Имя"
        value={name}
        onChange={(evt) => setName(evt.target.value)}
        onKeyUp={handlerKeyUp1}
      />
      <br />
      <input
        ref={surnameInputRef}
        type="text"
        placeholder="Фамилия"
        value={surname}
        onChange={(evt) => setSurname(evt.target.value)}
        onKeyUp={handlerKeyUp2}
      />
    </form>
  );
}

export default FormForFullName;
