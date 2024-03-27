import React from 'react'

export default function Heading(props) {
  return (
    <div className='d-flex justify-content-center align-items-center'>
        <h2>Hakuna Matata {props.name}</h2>
    </div>
  )
}
