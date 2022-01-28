import Http from '@/utils/Http'
export const ListArticles = (type) => {
    return new Promise((resolve, reject) => {
        Http.get(`cats/${type}`)
        .then((d) => {
            resolve(d.data)
        }).catch(e => {
            reject(e)
        })
    })
}