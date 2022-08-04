import axios from 'axios'

const API_URL = '/api/users/'

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData, {
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData, {
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  console.log(response.data)
  return response.data
}


// get my user
const get_user = async (userData) => {
  const response = await axios.post(API_URL + 'me', userData, {
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  console.log(response.data)
  return response.data
}


// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
  get_user
}

export default authService
