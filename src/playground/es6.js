



class Person{

   
     constructor(name, age){

             this.name = name;
             this.age = age ;

        }

        getDescription(){


            return `Hi this is ${this.name} and my age is ${this.age}`;
        }

        getGreeting(){

            console.log("Hi"+ this.name+" is your girlfriend")
        }


}

const me1 = new Person("Yousuf Borna",28);

//const me1 = new Person();

console.log(me1.getDescription())
//console.log(me1)
