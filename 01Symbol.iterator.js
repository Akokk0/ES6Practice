const xiyou = ['唐僧', '孙悟空', '猪八戒', '沙和尚']

/*
let iterator = xiyou[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())*/

/*for (let item of xiyou) {

    console.log(item)

}

for (let item in xiyou) {

    console.log(item)

}*/

const banji = {

    name: '终极一班',
    stus: [
        'xiaoming',
        'xiaoning',
        'xiaotian',
        'knight'
    ],
    [Symbol.iterator]() {

        let index = 0
        return {

            next: () => {

                if (index < this.stus.length) {
                    const result = {value: this.stus[index], done: false}
                    index++
                    return result
                } else {
                    return {value: undefined, done: true}
                }

            }

        }

    }

}

/*for(let item in banji) {

    console.log(item)

}*/

//报错
/*for(let item of banji) {

    console.log(item)

}*/

//使用Foreach
/*
banji.stus.forEach(function(item) {

    console.log(item)

})*/

for (let item of banji) {

    console.log(item)

}