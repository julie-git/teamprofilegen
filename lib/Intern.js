const Employee = require("./employee");

class Intern extends Employee{
    constructor(name,id,email,school,title){
      super(name,id,email,title);
      this.school = school;
      
    }


 getRole(){
    console.log("getRole");
    return this.role="Intern";
 }

 getSchool(){
     return this.school;
 }

 
}
module.exports = Intern;