const initialState = {
  name: '',
  details: '',
  notes: '',
  steps: [],
  importance: '',
  urgent: false,
  dueDate: null,
  dueTime: null
}

const todoFormReducer = (state = initialState, { type, payload }) => {
  switch(type){
    case 'CHANGE_NAME':
      return {...state, name: payload}

    case 'CHANGE_DETAILS':
      return {...state, details: payload}

    case 'CHANGE_NOTES':
      return {...state, notes: payload}

    case 'CHANGE_STEPS':
      let steps = [...state.steps]
      return {...state, steps}

    case 'CHANGE_IMPORTANCE':
      return {...state, importance: payload}

    case 'CHANGE_URGENT':
      return {...state, urgent: payload}

    case 'CHANGE_DUE_DATE':
      return {...state, dueDate: payload}

    case 'CHANGE_DUE_TIME':
      return {...state, dueTime: payload}

    default:
      return state
  }
}

export default todoFormReducer