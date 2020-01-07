const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name,id,title,github,officeNumber){
      super(name,id,title);
      this.officeNumber=officeNumber;
      this.github=github;
    }


 getRole(){
    console.log("getRole");
    return this.role="Engineer";
 }

 getOfficeNumber(){
     return this.officeNumber;
 }

 getGithub(){
     return this.gitHub;
 }

}
module.exports = Engineer;