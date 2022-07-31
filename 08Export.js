//分别暴露
/*export const name = 'akokko'
export function f() {
    console.log('We can change you!')
}*/

//统一暴露
/*const name = 'akokko'
function f() {
    console.log('We can change you!')
}
export {name, f}*/

//默认暴露
/*const name = 'akokko'
function f() {
    console.log('We can change you!')
}
export default {name, f}*/

export default {
    name: 'akokko',
    f: () => {
        console.log('We can change you!')
    }
}
