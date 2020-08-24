import React, { useRef } from 'react'
import '../03-examples/hooks.css'

export const FocusScreen = () => {

  const inputRef = useRef()

  const handleClick = () => {
    inputRef.current.select()
    console.log(inputRef)
  }

  return (
    <>
      <h1>Focus Screen</h1>
      <input type="text"
        ref={ inputRef }
        className="form-control"
        placeholder="your-name"
      />

      <button
        className="btn btn-outline-primary mt-5"
        onClick={ handleClick }
      >Focus</button>
    </>
  )
}

export default FocusScreen
