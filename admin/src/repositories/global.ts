import Api from '@/utils/axios/Api';
import user from "@/models/user"
const Http = Api.getInstance();


export const Upload = (payload:Object) => {
    return new Promise((resolve, reject) => {
        Http.post('upload' , payload , {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
          })
        .then((d) => {
            resolve(d)
        }).catch(e => {
            reject(e)
        })
    })
}