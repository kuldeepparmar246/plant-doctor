import axios from "axios"


const login = async (obj) => {
  const response = await axios.post('http://localhost:3001/api/login',obj)
  return response
}

export { login }