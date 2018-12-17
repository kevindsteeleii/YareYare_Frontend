const initialState = {
  token: localStorage.token || '',
  user: JSON.parse(localStorage.getItem('user')) || {},
  formMode: 'NEW',
  tasks: []
}

const baseReducer = ( state = initialState, { type, payload } ) => {
  switch ({ type }) {
    case 'LOGIN':
    case 'SIGNUP':
      return {...state, user: payload.user, token: payload.token}

    case 'GET_TASKS': // will probably use this for 
      return {...state, tasks: payload}

    case 'ADD_TASK':
      let tasks = [...state.tasks, payload]
      return {...state, tasks}

    case 'CHANGE_FORM_MODE':
      return {...state, formMode: payload}  
  
    default:
      let user = JSON.parse(localStorage.getItem('user')) || {}
      let token = localStorage.token || ''
      return {...state, user, token}
  }
}

export default baseReducer

