import api from '../services/api'

export default {
    register (credentials){
        return api().post('register', credentials)
    }
}

// auth.register({
//     email:'denis.gheorghe01@gmail.com',
//     password:'Testing123'
// })