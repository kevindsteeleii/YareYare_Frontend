import * as _adapter from './adapter';
import { GET_TASKS, CHANGE_FORM_MODE } from './types';

export const loginAndSignup = ( type, userBody) => {
  return (dispatch) => _adapter.loginAndSignUp(type, userBody)
  .then(data => {
    let { user, token } = data
    localStorage.token = token
    localStorage.user = JSON.stringify(user)
    dispatch({ type , payload: { user, token} })
  })
}

export const getTasks = (userId, token) => {
  return (dispatch) => _adapter.getTasks(userId, token)
  .then(payload => dispatch({ type: GET_TASKS, payload})
)}

export const _getTasks = (userId, token) => {
  return (dispatch) => fetch(`http://localhost:3001/tasks/byUser/${userId}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      Accept: 'application/json'
    }
  }).then(res => res.json())
  .then(payload => {
    dispatch({ type: GET_TASKS, payload })
  }).catch(err => console.log(err))
}

export const changeFormMode = (payload) => {
  return (dispatch) => dispatch({ type: CHANGE_FORM_MODE, payload })
}