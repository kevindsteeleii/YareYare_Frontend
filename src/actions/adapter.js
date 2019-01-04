const BaseURL = 'http://localhost:3001'
const AuthURL = `${BaseURL}/auth`
// const UsersURL = `${BaseURL}/users`;
const TasksURL = `${BaseURL}/tasks`

export const loginAndSignUp = (type ,userObj) => fetch(`${AuthURL}/${type.toLowerCase()}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({user: {...userObj}})
  }).then(res => res.json())
  .catch(err => {
    console.error(err)
  })

export const getTasks = (userId, token) => fetch(`${TasksURL}/byUser/${userId}`,{
  method: 'GET',  
  headers: {
    'Authorization': `Bearer ${token}`,
    Accept: 'application/json'
  }
}).then(res => res.json())
.catch(err => {
  console.error(err)
})