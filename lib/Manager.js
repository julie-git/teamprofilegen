const Employee = require("./employee");

class Manager extends Employee{
    constructor(name,id,title,officeNumber){
      super(name,id,title);
      this.officeNumber=officeNumber;
    }


 getRole(){
    console.log("getRole");
    return this.role="Manager";
 }

 getOfficeNumber(){
     return this.officeNumber;
 }

}
module.exports = Manager;