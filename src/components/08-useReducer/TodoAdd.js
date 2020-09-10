import React from 'react'
import { useForm } from '../../hooks/useForm'

const TodoAdd = ({ handleAddTodo }) => {
  const [ { description }, handleInputChange, reset ] = useForm({
    description: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // disallow empty todos
    if (description.trim().length <= 1) return

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false
    }

    // const add = {
    //   type: 'add',
    //   payload: newTodo
    // }

    // update state with reducer
    handleAddTodo(newTodo)
    // clear the form after reducer
    reset()

  }


  return (
    <>
      <h4>Add TODO</h4>
      <hr />

      <form onSubmit={ handleSubmit }>

        <input
          type="text"
          name="description"
          className="form-control"
          placeholder="Learn ..."
          autoComplete="off"
          value={ description }
          onChange={ handleInputChange }
        />

        <button
          type="submit"
          className="btn btn-outline-primary mt-1 btn-block">
          Add new todo
            </button>

      </form>
    </>
  )
}

export default TodoAdd
