//1
const arr = [1, 2, 3, 5, 1, 6, 2, 5, 6, 7]
const uniqueList = (arr) => [...new Set(arr)]

console.log("1.", uniqueList(arr))

//2
const obj1 = {
    id: 1,
    name: "userName"
}
const obj2 = {
    id: 2,
    password: 'qwerty'
}

console.log("2.", Object.assign(obj1, obj2))

//3
const add = (x, y) => x + y

console.log("3.", add)

//4
const sleep = ms => new Promise(resolve => setTimeout(() => resolve(), ms))

sleep(5000).then(() => console.log("Выполнится через 5 секунд"))