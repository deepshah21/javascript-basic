'use strict'
var cat1 = {name:'flufy',color:'white',act : function(activityName){ console.log(activityName)}}
cat1.age = 4
cat1.speak = function() {console.log("meeow")}
console.log(cat1.name)
console.log(cat1.age)
cat1.speak()
cat1.act("run")


function Cat2(name,color) {
    this.name = name
    this.color = color
}
var Cat2 = new Cat2('fluffy','black');
console.log(Cat2);


var cat3 = Object.create(Object.prototype,{
    name: {
        value: 'fluffy',
        enumerable:true,
        writable:true,
        configurable:true
    },
    color: {
        value: 'white',
        enumerable:true,
        writable:true,
        configurable:true
    }
})
console.log(cat3);

// Ecmascript 6 -->u can create object using class structure
class Cat4{
    constructor(name, color){
        this.name = name
        this.color = color
    }
    speak(){
        console.log("meow")
    }
}
var cat4  = new Cat4("fluffy","white")
console.log(cat4)
cat4.speak()