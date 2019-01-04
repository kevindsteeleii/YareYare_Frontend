import * as _adapter from './adapter';
import * as _helper from './_helper';
import { GET_TASKS, CHANGE_FORM_MODE, LOGOFF } from './types';

export const loginAndSignup = ( type, userBody) => {
  return (dispatch) => _adapter.loginAndSignUp(type, userBody)
  .then(data => {
    let { user, token } = data
    localStorage.token = token
    localStorage.user = JSON.stringify(user)
    dispatch({ type , payload: { user, token} })
  }).catch(err => console.log(err))
}

export const logoff = () => {
  return (dispatch) => {
    _helper.wipeLocalStorage();
    return dispatch({ type: LOGOFF, payload: null })
  }
}

export const getTasks = (userId, token) => {
  return (dispatch) => _adapter.getTasks(userId, token)
  .then(payload => {
    let tasks = [];
    payload.forEach(task => {
      tasks.push(task)
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
    dispatch({ type: GET_TASKS, payload})
  }).catch(err => console.log(err))
}

export const changeFormMode = (payload) => {
  return (dispatch) => dispatch({ type: CHANGE_FORM_MODE, payload })
}