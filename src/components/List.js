import React from 'react'

export default function List() {
    function embedded()
    {
        return "22-07-1999"
    }
  return (
    <div>
        <ul>
            <li>{2 + 2}</li>
            <li>{"Tanush" + 2}</li>
            <li>{34 - 22}</li>
            <li>{embedded()}</li>
        </ul>
    </div>
  )
}
