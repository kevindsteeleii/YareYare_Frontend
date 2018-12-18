const initialState = {
  token: localStorage.token || '',
  user: JSON.parse(localStorage.getItem('user')) || {},
  auth: !! localStorage.token,
  formMode: 'NEW',
  tasks: []
}

const baseReducer = ( state = initialState, { type, payload } ) => {
  switch ({ type }) {
    case 'LOGIN':
    case 'SIGNUP': // *DONT-FORGET: The ACTION CREATOR NEEDS to enter the email info to create the new account
      let auth = !! localStorage.token
      return {...state, user: JSON.parse(payload.user), token: payload.token, auth}

    case 'GET_TASKS': // will probably use this for reloading tasks
      let tasks = payload // [...payload]
      return {...state, tasks: payload}

    case 'LOAD_TASKS':
      console.log('\nPayload:\n',payload)
      tasks = [...payload];
      return {...state, tasks};

    case 'ADD_TASK':
      tasks = [...state.tasks, payload];
      return {...state, tasks};

    case 'CHANGE_FORM_MODE':
      return {...state, formMode: payload}  
  
    default:
      let token = localStorage.token || '';
       let user = JSON.parse(localStorage.getItem('user')) || {};
      return {...state, token, user};
  }
}

export default baseReducer;

