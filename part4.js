'use strict';
(function(){

    function Person(firstName,lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
    Person.prototype.age = 40
    console.log(Person.prototype) //Person {} here prototype is inmemory 
    let jim = new Person("jim","jam")
    console.log(jim.__proto__) //Person{}
    console.log(jim.__proto__ === Person.prototype)  //true as they refer to same instance in memory

    jim.age = 18;
    console.log(jim.age)            //18
    console.log(jim.__proto__.age)  // 40

    Person.prototype = {age:29}         //this create another proto instance for Person in memory
    let sofia = new Person("sofiya","hugia")
    console.log(jim.__proto__.age)  // 40
    console.log(sofia.__proto__.age)  // 29

})();