'use strict'

// class person{
//    constructor(name,age){
//       this.name=name;
//       this.age=age;
//    }
// }
// const person = {
//    name: "saman",
//    age: 18,
//    greet: function() {
//      console.log("Hey everyone, my name is " + this.name + " and my age is " + this.age + ".");
//    }
//  };
 
//  person.greet();

const button =document.getElementById("hey");
button.addEventListener("click",function(){
   console.log(this);
   this.textContent="clicked";
})