const p = new Promise((resolve, reject) => {

    setTimeout(() => {

        reject('用户数据')

    }, 1000)

})

const result = p.then(value => {

    console.log(value)
    return 'I love you'

}, reason => {

    console.warn(reason)

})

console.log(result)