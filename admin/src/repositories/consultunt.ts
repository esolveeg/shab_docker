import Api from '@/utils/axios/Api';
const Http = Api.getInstance();







export const UpdateConsultunt = (payload:Object , id:number) => {
    return new Promise((resolve, reject) => {
        Http.put(`consultunts/${id}` , payload)
        .then((d) => {
            resolve(d)
        }).catch(e => {
            reject(e)
        })
    })
}

export const CreateConsultunt = (payload:Object) => {
    return new Promise((resolve, reject) => {
        Http.post(`consultunts` , payload)
        .then((d) => {
            resolve(d)
        }).catch(e => {
            reject(e)
        })
    })
}


export const ConsultuntById = (id:string) => {
    return new Promise((resolve, reject) => {
        Http.get(`consultunts/${id}`)
        .then((d) => {
            resolve(d)
        }).catch(e => {
            reject(e)
        })
    })
}
