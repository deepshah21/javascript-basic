var arr = ["orange","yellow","green"]

Object.defineProperty(Array.prototype,'last',{
    get: function(){
        return this[this.length-1]
    }
})
var last = arr[arr.length-1];
console.log(arr.last);

function cat(name, color){
    this.name = name;
    this.color = color
}
cat.prototype.age = 4

var fluffy = new cat("fluffy","white")
var mufin = new cat("mufin","brown")

console.log(cat.prototype)
console.log(fluffy.__proto__)


console.log(fluffy.hasOwnProperty('age')) //false
fluffy.age = 5
console.log(fluffy.age) // 5
console.log(fluffy.__proto__.age)  // 4
console.log(fluffy.hasOwnProperty('age')) // true

class Animal{
    constructor(voice){
        this.voice = voice || 'grunt'
    }
    speak(){
        console.log(this.voice)
    }
}

class Cat1 extends Animal{
    constructor(name, color){
        super('meow')
        this.name = name
        this.color = color
    }
}
var sussy = new Cat1('sussy','brow')
console.log(Object.keys(sussy)) //'voice','name','color'
console.log(sussy.__proto__) // cat{}
console.log(sussy.__proto__.__proto__) // animal {}
console.log(sussy.__proto__.__proto__.hasOwnProperty('speak')) // true
console.log(sussy.__proto__.__proto__.__proto__) //{}
console.log(sussy.__proto__.__proto__.__proto__.__proto__) // null


// creating own prototype and useage
function animal1(){}
animal1.prototype.speak = function() {
    console.log("grunt")
}

function cat2(name, color){
    this.name = name;
    this.color = color
}
cat2.prototype = Object.create(animal1.prototype)
var fluffy1 = new cat2("fluffy","white")
fluffy1.speak()