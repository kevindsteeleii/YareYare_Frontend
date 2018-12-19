export const wipeLocalStorage = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  localStorage.removeItem('tasks');
}

export const getStateAuth = () => {
  let token = localStorage.getItem('token') || "",
       user = JSON.parse(localStorage.getItem('user')) || {},
      tasks = JSON.parse(localStorage.getItem('tasks')) || [],
       auth = !!localStorage.getItem('token') || false;
  const stateAuth = { token, user, tasks, auth };

  return stateAuth;
}

export const authRoute = () => {
  return !!localStorage.getItem('token');
}