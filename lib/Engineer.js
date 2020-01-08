const Employee = require("./employee");

class Engineer extends Employee{
    constructor(name,id,role,github,officeNumber){
      super(name,id,role);
      this.officeNumber=officeNumber;
      this.github=github;
      this.role = "Engineer"
    }


 getRole(){
    console.log("getRole");
    return this.role;
 }

 getOfficeNumber(){
     return this.officeNumber;
 }

 getGithub(){
     return this.github;
 }

}
module.exports = Engineer;