const falarDepoisDe = (segs, frase) => {
    return new Promise((resolve, reject) => {
        if (segs > 2) reject('Limit seconds [error]')

        setTimeout(() => {
            resolve(frase)
        }, segs * 1000)
    })
}

falarDepoisDe(1, 'Hello World!')
    .then(resp => console.log(resp))
    .catch(error => console.log(error))


// For example
const base = '/localhost/v1/api/'
const validEndPoint = `${base}/clients/2`

const axios = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url !== validEndPoint) reject('End point invalid. Try again')
            resolve({ status: 200, data: { name: 'Lucas' } })
        }, 1000)
    })
}
// Resolve
axios(`${base}/clients/2`)
    .then(resp => console.log(resp))
    .catch(error => console.log(error))

// Reject
axios(`${base}/clients/136`)
    .then(resp => console.log(resp))
    .catch(error => console.log(error))