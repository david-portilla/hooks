import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useMemo } from 'react'
import { heavyProcess } from '../../helpers/heavyProcess'

import './hooks.css'

export const MemoHook = () => {

  const { counter, increment } = useCounter(1000)
  const [ show, setShow ] = useState(true)
  const rememberProcess = useMemo(() => heavyProcess(counter), [ counter ])

  return (
    <>
      <h1>MemoHook</h1>
      <h3>Counter: <small>{ counter }</small>  </h3>
      <hr />

      <p>{ rememberProcess }</p>

      <button
        className="btn btn-primary"
        onClick={ increment }
      >
        +1
      </button>

      <button
        className="btn btn-outline-primary ml-3"
        onClick={ () => { setShow(!show) } }
      >
        Show/Hide { JSON.stringify(show) }
      </button>
    </>
  )
}

export default MemoHook
