import React from 'react'

export const Small = React.memo(({ value }) => {
  console.log(value)
  return (
    <small> { value }</small>
  )
})

export default Small