const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          complete: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if(todo.id === action.id) {
          return {
            ...todo,
            complete: !todo.completed
          }
        }
        return todo
      })
    default:
    return state
  }
}

export default todos