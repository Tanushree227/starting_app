import React from 'react'

export default function Heading(props) {
  return (
    <div style={{"display": "flex", "justifyContent": "center", "alignItems": "center"}}>
        <h1>Hello {props.firstName}</h1>
        <h2 style={{"color": "tomato"}}>Hakuna Matata {props.name}</h2>
    </div>
  )
}
