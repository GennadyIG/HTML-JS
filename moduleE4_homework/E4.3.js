function createObj() {
    return Object.create(null)
}

k = createObj()

console.log(k.__proto__)