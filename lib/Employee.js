// TODO: Write code to define and export the Employee class


// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee'

class Employee {
     constructor(name, id, email){
       this.name = name
       this.id = id
       this.email = email
     }
     getName(){
         return this.name
     }
     getId(){
         return this.id
     }
     getEmail(){
         return this.email
     }
     getRole(){
         return "Employee"
     }
     
}


module.exports = Employee  
 
// dog={
//     name:"woffy",
//     age:12
// }

// cat={
//     name:"meow",
//     age:14
// }

// function Animal(name,age){
//     this.name=name
//     this.age=age
// }

// class Animal extends Food{
//     constructor(name,age,food){
//         super(food)
//        this.name=name
//        this.age=age
//     }
// }


// class Food{
//     constructor(food){
//         this.food=food
//     }
// }

// dog =new Animal("woffy",12)
// cat =new Animal("meow",15)
