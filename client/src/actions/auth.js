import axios from 'axios'
import jwtDecode from 'jwt-decode'
import { navigate } from 'hookrouter'

import { SET_CURRENT_USER } from './types'
import { setAuthToken } from '../utils'

export const register = credentials => () => {
  axios
    .post('/api/auth/register', credentials)
    .then(() => navigate('/login'))
}

export const login = credentials => dispatch => {
  axios
    .post('/api/auth/login', credentials)
    .then((res) => {
      const { token } = res.data
      localStorage.setItem('access_token', token)
      setAuthToken(token)
      const decoded = jwtDecode(token)
      dispatch(setCurrentUser(decoded))
    })
}

export const logout = () => dispatch => {
  localStorage.removeItem('access_token')
  setAuthToken(false)
  dispatch(setCurrentUser({}))
}

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user,
})
