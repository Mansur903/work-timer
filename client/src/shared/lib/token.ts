import axios from 'axios'

export const TOKEN_KEY = 'auth'

export const setBearer = (token: string) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}
export const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, JSON.stringify({token}))
  setBearer(token)
}

export const deleteToken = () => localStorage.removeItem(TOKEN_KEY)

export const getToken = (): string | null => {
  const token = localStorage.getItem(TOKEN_KEY)
  if (!token) return null

  try {
    return JSON.parse(token)
  } catch {
    deleteToken()
  }

  return null
}