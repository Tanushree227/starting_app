import React from "react";

export function Parent() 
{
    <>
    <h1>Hii I'm Parent component</h1>
    <Child avenger="ironman" />
    </>
}
export function Child(props)
{
    <div>
        <h1>Hii I'm the Child component, and I'm {props.avenger} fan.</h1>
    </div>
}

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
      <h1>Week - 2 Learnings</h1>
      <button className="btn btn-success" onClick={clickHandler}>
        Click Here!
      </button>
      <div>
        {darkModeOn ? darkMode : lightMode}
        <p>After changing the mode variable</p>
        <button className="btn btn-outline-success" onClick={handleClick}>
          Click here again..
        </button>
        <p><strong>React Hooks: </strong>Hooks let you use state and other React features without writing a class.</p>
        <ul>
          <p>There are 3 rules for hooks:</p>
          <li>Hooks can only be called inside React function components.</li>
          <li>Hooks can only be called at the top level of a component.</li>
          <li>Hooks cannot be conditional.</li>
        </ul>
      </div>
      <Parent />
    </div>
  );
}
