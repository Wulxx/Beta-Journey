import axios from 'axios'

export default {
  fetchProfileData () {
    return axios.get('http://localhost:8082/')
      .then(response => {
        return response.data
      })
  }
}
