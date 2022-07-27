const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const p = new Promise((resolve, reject) => {

    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'http://baidu.come')
    xhr.send()
    xhr.onreadystatechange = () => {

        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText)
            } else {
                reject(xhr.statusText)
            }
        }

    }

})

p.then(data => console.log(data), reason => console.log(reason))