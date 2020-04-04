'use strict'

var cat = {
    name: 'fluffy',
    color: 'white'
}

console.log(Object.getOwnPropertyDescriptor(cat,'name'))
/*{ value: 'fluffy',
  writable: true,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
  enumerable: true,
  configurable: true }*/

Object.defineProperty(cat,'name',{writable:false}) 
//  cat.name = 'tom' 
 // so here we can't assign value to name property
 // TypeError: Property description must be an object: 
 // but if name property is an object that we can 
// for example.

var cat1 = {
    name : {first: 'tom',last:'jerry'},
    color : 'white'
}
Object.defineProperty(cat1,'name',{writable:false}) 
cat1.name.first = 'doraemon';
console.log(cat1)
/* It will update as properties work upon the references
   { name: { first: 'doraemon', last: 'jerry' }, color: 'white' }
   so to prevent this we have to use Object.freeze() */
//Object.freeze(cat1.name)
//cat1.name.first = 'nobita';
/*cat1.name.first = 'nobita';
                  ^
TypeError: Cannot assign to read only property 'first' of object '#<Object>' */
//console.log(cat1)


// enumerable properties
for(var propertyName in cat1){
    console.log(propertyName)
}
Object.defineProperty(cat1,'name',{enumerable:false})
// so here name property will be exclude from the iteration
for(var propertyName in cat1){
    console.log(propertyName)
}


// configurable
// if false than u can't change the enumberable, configurable, writable and neither delete that property.
Object.defineProperty(cat1,'name',{configurable:false})
/*Object.defineProperty(cat1,'name',{enumerable:true})
Object.defineProperty(cat1,'name',{enumerable:true})
       ^

TypeError: Cannot redefine property: name*/

// getters and setters

Object.defineProperty(cat1,'fullName',{
    get: function(){
        return this.name.first + ' ' + this.name.last
    },
    set: function(value){
        var namePar = value.split(' ')
        this.name.first = namePar[0]
        this.name.last = namePar[1]
    }
})

cat1.fullName = "Muffin Top"
console.log(cat1.fullName) // Muffin Top
console.log(cat1.name.first) // Muffin
console.log(cat1.name.last) //Top