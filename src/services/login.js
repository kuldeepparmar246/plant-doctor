import axios from "axios"
`${import.meta.env.VITE_SERVER_URL}/predict`


const login = async (obj) => {
  const response = await axios.post(`${import.meta.env.REACT_APP_SERVER_URL}/api/login`,obj)
  return response
}

export { login }