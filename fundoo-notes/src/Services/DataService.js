import axios from 'axios'
const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  };

export const WriteNote = async (obj) => {
    console.log('hi', obj)
    let response = await axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes', obj, config)
    return response;
}

export const getNote = async() => {
  let response = await axios.get('http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList', config)
  return response;
}

export const GetEmail = async (data) => {
  let response = await axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/searchUserList', data, config)
  console.log(response)
  return response;
}

export const archiveNotes = async (data) => {
  console.log(data)
  let response = await axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes', data, config)
  console.log(response);
  return response;
}



