const initialState = [
  {
    id: 1,
    todo: 'buy milk',
    done: false
  }
]

const todoReducer = (state = initialState, action) => {

  if (action?.type === 'add') {
    return [ ...state, action.payload ]
  }
  return state
}

let todos = todoReducer()

const newTodo = {
  id: 2,
  todo: 'buy beaf',
  done: false
}

const action = {
  type: 'add',
  payload: newTodo
}

todos = todoReducer(todos, action)

console.log(todos)