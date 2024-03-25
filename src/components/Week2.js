import React from 'react'

export default function Week2() {
    function clickHandler()
    {
        alert("Ohh Good Job, Keep Going.")
    }

  return (
    <div align="center">
        <h1>Week2 Learnings</h1>
        <button onClick={clickHandler}>Click Here!</button>
    </div>
  )
}
