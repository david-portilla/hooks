import React, { useReducer, useEffect } from 'react'
import { todoReducer } from './todoReducer'
import { useForm } from '../../hooks/useForm'

import './styles.css'

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

export const TodoApp = () => {

  const [ todos, dispatch ] = useReducer(todoReducer, [], init)
  // useReducer(reducer, initializerArg, initializer)

  const [ { description }, handleInputChange, reset ] = useForm({
    description: ''
  })

  // save new todos on localstorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [ todos ])

  // remove Todo by Id
  const handleDelete = (todoId) => {
    // e.preventDefault()

    console.log(todoId)
    //
    const remove = {
      type: 'delete',
      payload: todoId
    }
    // update state with reducer
    dispatch(remove)
  }


  const handleToggle = (todoId) => {
    //
    const done = {
      type: 'toggle',
      payload: todoId
    }
    // update state with reducer
    dispatch(done)
  }

  // Save new todos from form
  const handleSubmit = (e) => {
    e.preventDefault()

    // disallow empty todos
    if (description.trim().length <= 1) return

    const newTodo = {
      id: new Date().getTime(),
      // desc: `New task ${ new Date().getTime() }`,
      desc: description,
      done: false
    }

    const add = {
      type: 'add',
      payload: newTodo
    }

    // update state with reducer
    dispatch(add)
    // clear the form after reducer
    reset()
  }

  return (
    <div>
      <h1>TodoApp ({ todos.length })</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {
              todos.map((todo, i) => (
                <li
                  key={ todo.id }
                  className="list-group-item">
                  <p
                    className={ `${ todo.done && 'complete' }` }
                    onClick={ () => handleToggle(todo.id) }
                  >
                    { i + 1 }. { todo.desc }
                  </p>

                  <button
                    className="btn btn-danger"
                    onClick={ () => handleDelete(todo.id) }
                  > Remove task </button>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="col-5">
          <h4>Add todo</h4>
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
        </div>
      </div>

    </div>
  )
}

export default TodoApp