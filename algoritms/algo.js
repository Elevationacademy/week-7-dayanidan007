/*
const print = function (numbers) {
    let smallestNumber = numbers[0] //our 'number stored in memory'
    for (let num of numbers) { //going over each number

        if (num < smallestNumber) {

            smallestNumber = num //forget the number stored in memory and store num instead
        }
    }
    console.log("Smallest number is " + smallestNumber)
}
let numbers = [823412013513, 1381120136324, 82341381745, 181238377131412, 74128377131412, 74128377412] // should find 74128377412

//let numbers = [-312, -9123, -112, -812, -7411, -312] //should find -9123

//let numbers = [23, 23, 23, 23, 23] //should find 23

print(numbers)

*/
//Exercise 1


const printStars = function (num) {
    let i = 1
    while (i <= num) {
        for (let j = 0; j < i; j++) {
            console.log('*')
        }
        i++
    }
}
//printStars(5)

//Exercise 2
const printBackwardsStars = function (num) {
    let i = num
    while (i > 0) {
        for (let j = 0; j < i; j++) {
            console.log('*')
        }
        i--
    }
}
//printBackwardsStars(5)

//Exercise 3
const printStarSeries = function (num, count) {
    for (let i = 0; i < count; i++) {
        printStars(num)
        printBackwardsStars(num)
    }
}

//printStarSeries(5,3)

//Exercise 4
const reverse = function (str) {

    let reversed = '' //my code
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str.charAt(i)
    }

    return console.log(reversed)
}

//reverse("dog") //should return "god"
//reverse("race car") //should return "rac ecar"

//Exercise 5

const isPalindrom = function (str) {
    str = str.toLowerCase()
    let j = 0
    let i = str.length - 1
    while (j < i) {
        if (str.charAt(i) === str.charAt(j)) {
            i--
            j++
        } else {
            return false
        }
    }
    return true
}

//console.log(isPalindrom('TacoCat'))
//Exercise 6

const encrypt = function (str) {
    let i = 0
    let charCode
    let newStr = ''
    while (i < str.length) {
        charCode = str.charCodeAt(i) + 1
        newStr += String.fromCharCode(charCode)
        i++
    }
    return newStr
}

//console.log(encrypt('cat'))

//Exercise 7
const decrypt = function (str) {
    let i = 0
    let charCode
    let newStr = ''
    while (i < str.length) {
        charCode = str.charCodeAt(i) - 1
        newStr += String.fromCharCode(charCode)
        i++
    }
    return newStr
}

//console.log(decrypt('dbu'))


//Exercise 8
const colors = ["red", "indigo", "white", "teal", "yellow"];
const foods = ["bread", "cheese", "cucumber"];

const jumble = function (arr1, arr2) {
    const lengthNewArry = arr1.concat(arr2)
    let jumbledArr = []
    let jumb
    for (let i = 0; i < arr1.concat(arr2).length; i++) {
        jumb = getRandomInt(lengthNewArry.length)
        jumbledArr.push(lengthNewArry[jumb])
        lengthNewArry.splice(jumb, 1)
    }
    return jumbledArr
}
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
//console.log(jumble(colors, foods)) // could return: ["cheese",teal","cucumber","red","bread","yellow","white","indigo"]


//Extension 1

const printInLoop = function (words) {
    if (stop) {
        console.log('stop')
    } else {
        words.forEach(w => {
            console.log(w)
        })
    }
}

printInLoop(["down", "the", "rabbit", "hole"])

