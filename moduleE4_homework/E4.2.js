function strInObj(str, obj) {
    for (let key in obj) {
        if (key === str) {
            return true
        }
    }
    return false
}

const paper = {
    'format': 'B4',
    'coated': 'silk',
    'color': 'ivory'
}

console.log(strInObj('format', paper))
console.log(strInObj(2, paper))
