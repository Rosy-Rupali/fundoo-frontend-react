import axios from 'axios'

const config = {
    headers: {
      "Content-Type": "application/json",
      },
  };
export const SignUp = async (data) => {
        let response = await axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp', data, config)
         console.log(response)
         return response.request.status;
}

export const Login = async (obj) =>{
    let response = await axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/login', obj, config)
    console.log(response)
    return response.request.status;
}