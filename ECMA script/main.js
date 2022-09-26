"use strict";

//let
let movie='terminator';

function notebook () {
  let movie='Inception';
  return movie;
}

   console.log(movie);
   console.log(notebook());
   console.log(movie);

//arrow function

   function circlearea(r){
      var PI=3.14;
      return PI*r*r;

   }

   let circlearea2=(r)=>{
      const PI=3.14;
      return PI*r*r;
   }

   let circlearea3=r=>3.14*r*r;
console.log(circlearea(5));
console.log(circlearea2(5));
console.log(circlearea3(5));

//templete literals

let name='Suraj';
console.log('my favorite person is '+name+' because he smells good.');
console.log('my favorite person is ${name} because he smells good.');

//Spread operators

function addnumbers(a,b,c,d){
  console.log(a+b+c+d);
}
var nums=[3,4,5,8];
addnumbers(...  nums);

//Classes

class person{
   constructor(name,age,weight){
    this.name=name;
    this.age=age;
    this.weight=weight;
   }
   displayweight(){
    console.log(this.weight);
   }
     displayname(){
    console.log(this.name);
   }
       displayage(){
    console.log(this.age);
   }

}

//Inheratence

class programmer extends person{
  constructor(name,age,weight,language){
    super(name,age,weight);
    this.language=language;
  }
     displaylanguage(){
    console.log(this.language);
   }
}

   let suraj = new programmer('Suraj',20,58,'javascript');
   let sonu=new person('sonu',18,45,);

   sonu.displayname();
   suraj.displaylanguage();

//Generators function

function* samplegenerator(){
  yield 'apples';
  yield 'bacon';
  console.log('ok, this is the line after bacon...');
  yield 'corn';

}
let sample= samplegenerator();
console.log(sample.next().value);
console.log(sample.next().value);
console.log(sample.next().value);
console.log(sample.next().value);





