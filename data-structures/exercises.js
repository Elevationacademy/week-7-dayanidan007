
class UniqueArray {
    constructor() {
        this.length = 0
    }
    add(item) {
        let count = this.length-1
        let check = this.helpToExist(item,count)
        if (check === false || check === undefined) {
            this[this.length] = item
            this.length++
        }
    }

    showAll() {
        console.log(this)
        for (let i = 0; i < this.length; i++) {
            console.log(' [' + this[i] + ']')
        }
    }

    exists(item) {
        let count = this.length-1
        return console.log(this.helpToExist(item, count))
    }

    helpToExist(item, count) {
        if (this[count] === item) {
            return true
        } else if (this[count] != item & count > 0) {
            count--
            this.helpToExist(item, count)
        } else {
            return false
        }
    }

    get(index){
        return this[index]
    }

}
const uniqueStuff = new UniqueArray()
uniqueStuff.add('toy')
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.exists({y:3}) //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
uniqueStuff.showAll()
console.log(uniqueStuff.get(2)) //prints "hydrogen"
