import * as React from 'react'

export default function Funny({funny}) {
  return (<div>
    <h1>{`${funny && funny.item}: ${funny && funny.count}`}</h1>
  </div>)
}