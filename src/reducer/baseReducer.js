import * as _helper from '../actions/_helper';

const initialState = {
  token: localStorage.token || '',
  user: JSON.parse(localStorage.getItem('user')) || {},
  auth: !! localStorage.token || false,
  formMode: 'NEW',
  tasks: JSON.parse(localStorage.getItem('tasks')) || []
}
const states = ['token', 'user', 'auth', 'formMode', 'tasks']

const baseReducer = ( state = initialState, { type, payload } ) => {
  switch ({ type }) {
    case 'LOGIN':
    case 'SIGNUP': 
    let { auth, token, user, tasks } = _helper.getStateAuth()
      return {...state, user, auth, token}
    
    case 'LOGOFF':
      // _helper.wipeLocalStorage()
      let copyState = {...state}
      for (state in states){
        copyState[state] = _helper.getStateAuth()[state]
      }
      return {...copyState}

    case 'GET_TASKS': // will probably use this for reloading tasks
      tasks = _helper.getStateAuth()['tasks'] // [...payload]
      return {...state, tasks }

    case 'LOAD_TASKS':
      return {...state, tasks: payload};

    case 'ADD_TASK':
      tasks = [...state.tasks, payload];
      return {...state, tasks};

    case 'CHANGE_FORM_MODE':
      return {...state, formMode: payload}  
  
    default:
      copyState = {...state}
      for (state in states){
        copyState[state] = _helper.getStateAuth()[state]
      }
      return copyState
  }
}

export default baseReducer;

