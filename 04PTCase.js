const fs = require('fs')
const path = require('path')

const p = new Promise((resolve, reject) => {

    const cp = path.join(__dirname, './res/从军行.md')
    console.log(cp)
    fs.readFile(cp, (err, data) => {
        if (err) reject(err)
        resolve(data)
    })

})

p.then(value => {

    return new Promise((resolve, reject) => {

        const cs = path.join(__dirname, './res/出塞.md')
        fs.readFile(cs, (err, data) => {

            if (err) reject(err)
            resolve([value, data])

        })

    })

}).then(value => {

    /*const cgx = path.join(__dirname, './res/长歌行.md')
    fs.readFile(cgx, (err, data) => {

        if (err) throw Error('读取文件失败')
        value.push(data)
        console.log(value.join('\r'))

    })*/

    return new Promise((resolve, reject) => {

        const cgx = path.join(__dirname, './res/长歌行.md')
        fs.readFile(cgx, (err, data) => {

            if (err) reject(err)
            value.push(data)
            resolve(value)

        })

    })

}).then(value => {

    console.log(value.join('\r'))

})