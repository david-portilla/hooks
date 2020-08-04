import React from 'react'
import { useCounter } from '../../hooks/useCounter'

import './counter.css'

const CounterWithCustomHook = () => {

  const { state, increment, decrement, reset } = useCounter(100)

  return (
    <>
      <h1>Hola Custom Hook { state }</h1>
      <hr />
      <button onClick={ () => increment(2) } className="btn btn-primary">+1</button>
      <hr />
      <button onClick={ reset } className="btn btn-secondary"> reset</button>
      <hr />
      <button onClick={ () => decrement(2) } className="btn btn-primary">-1</button>
    </>
  )
}

export default CounterWithCustomHook
