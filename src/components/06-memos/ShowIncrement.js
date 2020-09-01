import React from 'react'
import PropTypes from 'prop-types'

export const ShowIncrement = React.memo(({ increment }) => {
  console.log('mounting ShowIncrement.js')

  return (
    <button
      className="btn btn-primary"
      onClick={ () => {
        increment(5)
      } }
    >
      Increment button
    </button>
  )
})

export default ShowIncrement

ShowIncrement.propTypes = {
  increment: PropTypes.func.isRequired
}
