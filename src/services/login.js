import axios from "axios"

const login = async (obj) => {
  const response = await axios.post(`${import.meta.env.VITE_APP_SERVER_URL}/api/login`,obj)
  return response
}

export { login }