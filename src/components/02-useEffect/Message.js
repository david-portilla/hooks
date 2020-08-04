import React, { useEffect } from 'react'

const Message = () => {

  useEffect(() => {
    // console.log('mounted')

    const mouseMove = (e) => {
      const coors = { x: e.x, y: e.y }
      console.log(coors)
    }

    window.addEventListener('mousemove', mouseMove)

    return () => {
      // console.log('UNMounted')
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  return (
    <>
      <h3>This is a message</h3>
    </>
  )
}

export default Message
