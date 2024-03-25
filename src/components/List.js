import React from 'react'
import background from './bg1.jpg';

function Image(props) 
{
    const bg = <img src={background} alt='background' />
    return bg;
}

export default function List() {
    function embedded()
    {
        return "22-07-1999"
    }
  return (
    <div>
        <ul>
            <li>{2 + 2}</li>
            <li>{"Tanush " + 2}</li>
            <li>{34 - 22}</li>
            <li>{embedded()}</li>
            <Image />
        </ul>
    </div>
  )
}
