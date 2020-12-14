/*
const getBalance = function (bankOperations) {
    let balance = 0
    for (let op of bankOperations) {
        balance += op
    }
    return balance
}

getBalance([-27, -43, -2400, -700, 15000, 58])
//complexity = O(n)

const printSome = function (complaints) {
    for (let i = 1; i < complaints.length; i = i * 2)
        console.log(complaints[i].text);
}
//complexity = O(logn)

const allSides = [
    { a: 3, b: 4 },
    { a: 15, b: 21 },
    { a: 41, b: 8 },
    { a: 12, b: 6 }
]

const relevantSides = allSides.filter(s => s.a % 3 == 0)
for (let sides of relevantSides) {
    console.log(getHype(sides))
}

const getHype = function (sides) {
    let a = sides.a
    let b = sides.b
    let sumOfSquares = a * a + b * b
    return Math.sqrt(sumOfSquares)
}

//complexity = O(1)

const sendEmails = (email, recepients) => recepients.forEach(r => r.sendEmail(email))

const emailManager = function () {
    let email = generateEmail()

    $.get('/recepients', function (recepients) {
        sendEmails(email, recepients)
    })
}
//complexity = O(n)


// Exercise 6



const toObject = function (arr) {
    let rv = {};
    for (let i = 0; i < arr.length; ++i) {
        if (rv[arr[i]]) {
            rv[arr[i]]++
        } else {
            rv[arr[i]] = 1;
        }
    }
    return rv
}

const findDuplicates = function (ages) {
    let newages = toObject(ages)
    const keys = Object.keys(newages)
    for (let i = 0; i < keys; i++) {
        if (newages[i] > 1) {
            console.log(newages[i] + 'there  is Duplicate')
        }
    }
}

const ages = [1, 2, 1, 4, 5, 2]
findDuplicates(ages)
*/
//  Exercise 7

let employess = {
    ax01: {
        name: 'Ray',
        age: 28,
        salary: 1300
    },
    qs84: {
        name: 'Lucius',
        age: 31,
        salary: 840
    },
    bg33: {
        name: 'Taylor',
        age: 18,
        salary: 2700
    }
}
const findEmployeeSalary = function (employeeID) {
    let salary = employeeID.salary
    return salary
}
// console.log(findEmployeeSalary('ax01'))



//  Exercise 9 //
//red = O(n2)
//blue = O(n)
// yellow = O(logn)
//green = O(1)