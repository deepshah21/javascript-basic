'use strict';
(function(){
    class Person{
        constructor(firstName,lastName,age){
            this.firstName = firstName
            this.lastName = lastName
            this.age = age
        }
        get fullName(){
            return this.firstName+' '+this.lastName
        }
        set fullName(fullName){
            var namePart = fullName.split(" ");
            this.firstName = namePart[0]
            this.lastName = namePart[1]
        }
        isAdult(){
            return this.age >= 18;
        }
    }

    class Student extends Person{
        constructor(firstName,lastName,age){
            super(firstName,lastName,age)
            this._enrolldCourses = []
        }
        enroll(courseId){
            this._enrolldCourses.push(courseId)
        }
        getCourses(){
            return this.fullName + "'s enrollement with "+ this._enrolldCourses.join(' ')
        }
    }
    
    let jim = new Person("jim","cooper",29) //Person { firstName: 'jim', lastName: 'cooper', age: 29 }
    jim.fullName = "hugh jackman"
    console.log(jim)  //Person { firstName: 'hugh', lastName: 'jackman', age: 29 }
    console.log(jim.fullName) ///hugh jackman
    console.log(jim.isAdult()) //true

    Object.defineProperty(Person.prototype,'fullName',{enumerable:true});
    console.log(jim)
    let sofia = new Student('hugia','sofia',35)
    sofia.enroll('M16')
    console.log(sofia.getCourses())   //hugia sofia's enrollement with M16
    
})();