import Api from '@/utils/axios/Api';
import user from "@/models/user"
const Http = Api.getInstance();





export const UserById = (id:number) :Promise<user> => {
    return new Promise((resolve , reject) => {
        Http.get<user>(`users/${id}`).then((res) => {
            resolve(res)
        }).catch(e => {
            reject(e)
        })
    })
}


export const UpdateUser = (payload:Object , id:number) => {
    return new Promise((resolve, reject) => {
        Http.put(`users/${id}` , payload)
        .then((d) => {
            resolve(d.data)
        }).catch(e => {
            reject(e)
        })
    })
}


export const Upload = (payload:Object) => {
    return new Promise((resolve, reject) => {
        Http.post('upload' , payload , {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
          })
        .then((d) => {
            console.log(d)
            resolve(d)
        }).catch(e => {
            reject(e)
        })
    })
}