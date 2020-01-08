const Employee = require("./employee");

class Intern extends Employee{
    constructor(name,id,email,school,role){
      super(name,id,email,role);
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