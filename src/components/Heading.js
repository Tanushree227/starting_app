import React from 'react'

export default function Heading(props) {
  return (
    <div className='d-flex justify-content-center align-items-center'>
        <h1>Hello {props.firstName}</h1>
        <h2>Hakuna Matata {props.name}</h2>
    </div>
  )
}
