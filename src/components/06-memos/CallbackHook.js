import React, { useCallback } from 'react'

import { useState } from 'react'
import ShowIncrement from './ShowIncrement'

import './hooks.css'


export const CallbackHook = () => {

  const [ counter, setCounter ] = useState(10)

  const increment = useCallback((num) => {
    setCounter(c => c + num)
  }, [ setCounter ])

  return (
    <div>
      <h1>Use Callback Hook: { counter }</h1>
      <hr />
      <ShowIncrement increment={ increment } />
    </div>
  )
}

export default CallbackHook