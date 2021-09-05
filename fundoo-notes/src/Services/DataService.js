import axios from 'axios'
const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  };

export const WriteNote = async (obj) => {
    let response = await axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes', obj, config)
    return response;
}

export const getNote = async() => {
  let response = await axios.get('http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList', config)
  return response;
}


