## ways to create object -> part1.js
    1. using object literals 
        var Cat = {name:'fluffy',color:'white'}
    2. creating function like constructor and using new key word.
    3. using object.create 
    4. ecmascript 6 --> using class and constructor


## javascript object properties --> part2.js
    1. writable
    2. enumerable
    3. configurable
    4. getters setters

## prototype and inheritance  --> part3.js
prototype is an object that exist in every function of javascript.
prototype is just an empty object.
_proto_ is property of all object in javascript

so function's prototype is the object instance that will become the prototype for all objects created using this function as a constructor.
instance from which the object is inherited.

3 things which need to understand before creating prototype inheritance chain
function Animal(voice){
    this.voice = voice || 'grunt'
}
Animal.prototype.speack = function(){
    console.log(this.voice)
}
function Cat(name,color){
    Animal.call(this,'meow')    // 1
    this.name = name
    this.color = color
}
Animal.call(this,'meow');
Cat.prototype = Object.create(Animal.prototype) //2 before and after Cat.prototype.constructor's value
Cat.proptotype.constructor = Cat            //3
var fluffy = new Cat('fluffy','white')
console.log(fluffy)  // Cat{voice:meow,name:fluffy,color:white,speak: function(){console.log(this.voice)}}
console.log(fluffy.__proto__)  // Cat{speak: function(){}}
console.log(fluffy.__proto__.__proto__) //Animal{speak:function (){}}


# creating class and prototype see example in part4.js
every function in javascript have a prototypeproperty
every object have a prototype(__proto__) but not a prototype property 
    
    Functiona's prototype  is the object instance that will become the prototype for all
    object created using this function as a constructor

    Object's prototype is the object instance from which the object is inherited

    if any object doesn't find property than it will try to fetch that property from prototype
    obj.hasOwnProperty("propertyName")

## class part5.js

1. creating object with class
2. geeters and setters method  //fullName
3. adding function to class  //isAdult
4. modifying property  discriptor
    classes have proptotype , getters and setters are lived into the prototype while other
    properties like firstName, lastName,age are live in object instances.
    we can change it by Object.defineProperty(Person.prototype,'fullName',{enumerable:true})
5. inheritance // same as we did in java (super, extends, and constructor)
6. static property  // worked same as java's static

