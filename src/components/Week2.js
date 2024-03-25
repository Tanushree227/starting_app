import React from "react";

export default function Week2() {
  let darkModeOn = false;
  const darkMode = <h1>Dark Mode is On</h1>;
  const lightMode = <h1>Light Mode is On</h1>;
  function handleClick() {
    darkModeOn = !darkModeOn;
    if (darkModeOn === true) {
      alert("Dark Mode is On");
    } else {
      alert("Light Mode is On");
    }
  }
  function clickHandler() {
    alert("Ohh Good Job, Keep Going.");
  }

  return (
    <div align="center">
      <h1>Week2 Learnings</h1>
      <button className="btn btn-success" onClick={clickHandler}>
        Click Here!
      </button>
      <div>
        {darkModeOn ? darkMode : lightMode}
        <button className="btn btn-outline-success" onClick={handleClick}>
          Click here again..
        </button>
      </div>
    </div>
  );
}
