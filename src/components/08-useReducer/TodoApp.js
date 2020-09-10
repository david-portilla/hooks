import React, { useReducer, useEffect } from 'react'
import { todoReducer } from './todoReducer'
import TodoList from './TodoList'
import TodoAdd from './TodoAdd'

import './styles.css'

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

export const TodoApp = () => {

  // useReducer(reducer, initializerArg, initializer)
  const [ todos, dispatch ] = useReducer(todoReducer, [], init)

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

  // enable done todo
  const handleToggle = (todoId) => {
    //
    const done = {
      type: 'toggle',
      payload: todoId
    }
    // update state with reducer
    dispatch(done)
  }

  // Add todo component
  const handleAddTodo = (newTodo) => {
    const add = {
      type: 'add',
      payload: newTodo
    }

    // update state with reducer
    dispatch(add)
  }

  return (
    <>
      <h1>TodoApp ({ todos.length })</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={ todos }
            handleDelete={ handleDelete }
            handleToggle={ handleToggle } />
        </div>

        <div className="col-5">
          <TodoAdd
            handleAddTodo={ handleAddTodo }
          />
        </div>
      </div>
    </>
  )
}

export default TodoApp