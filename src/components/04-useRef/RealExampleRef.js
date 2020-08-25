import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

import '../03-examples/hooks.css'

export const RealExampleRef = () => {

  const [ show, setShow ] = useState(false)


  return (
    <>
      <h1>Real Example Ref Hook</h1>
      <hr />

      { show && <MultipleCustomHooks /> }

      <br />
      <button
        className="btn btn-primary mt-5"
        onClick={ () => { setShow(!show) } }
      >Toogle Show Effect</button>
    </>
  )
}

export default RealExampleRef
