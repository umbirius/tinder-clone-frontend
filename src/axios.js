import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tindro-backend.herokuapp.com/'
})

export default instance 