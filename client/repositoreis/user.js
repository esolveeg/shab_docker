import Http from '@/utils/Http'


export const Login = (payload) => {
    return new Promise((resolve, reject) => {
        Http.post('login' , payload)
        .then((d) => {
            resolve(d)
        }).catch(e => {
            reject(e)
        })
    })
}


export const User = () => {
    return new Promise((resolve, reject) => {
        Http.get('me')
        .then((d) => {
            resolve(d)
        }).catch(e => {
            reject(e)
        })
    })
}


export const Consultunts = () => {
    return new Promise((resolve, reject) => {
        Http.get('consultunts')
        .then((d) => {
            resolve(d.data)
        }).catch(e => {
            reject(e)
        })
    })
}


export const Users = () => {
    return new Promise((resolve, reject) => {
        Http.get('users')
        .then((d) => {
            resolve(d.data)
        }).catch(e => {
            reject(e)
        })
    })
}


export const UpdateUser = (payload) => {
    return new Promise((resolve, reject) => {
        Http.put('me' , payload)
        .then((d) => {
            resolve(d.data)
        }).catch(e => {
            reject(e)
        })
    })
}

export const RegisterUser = (payload) => {
    return new Promise((resolve, reject) => {
        Http.post('register' , payload)
        .then((d) => {
            resolve(d.data)
        }).catch(e => {
            reject(e)
        })
    })
}


export const Ryadeen = () => {
    return new Promise((resolve, reject) => {
        Http.get('users?Role_id=3')
        .then((d) => {
            resolve(d.data)
        }).catch(e => {
            reject(e)
        })
    })
}

export const Upload = (payload) => {
    return new Promise((resolve, reject) => {
        Http.post('upload' , payload , {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
          })
        .then((d) => {
            resolve(d.data)
        }).catch(e => {
            reject(e)
        })
    })
}


