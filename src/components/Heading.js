import React from 'react'

export default function Heading(props) {
  return (
    <div>
        <h1>Hello {props.firstName}</h1>
        <h2>Hakuna Matata {props.name}</h2>
    </div>
  )
}
