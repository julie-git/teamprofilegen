const Employee = require("./employee");

class Manager extends Employee{
    constructor(name,id,title,officeNumber){
      super(name,id,title);
      this.officeNumber=officeNumber;
      this.role="Manager";
    }


 getRole(){
    console.log("getRole");
    return this.role="Manager";
 }

 getOfficeNumber(){
     return this.officeNumber;
 }

 generateHTML(){
   return `<div class="card bg-light mb-3" style="max-width: 18rem;">
   <div class="card-header">
     <h4><strong>${this.name}</strong></h4>
     <h5>
       <strong<i class="fas fa-mug-hot"></i>    ${this.role}</strong>
     </h5>
   </div>
   <div class="card-body">
     <div class="list-group-item">Id: ${this.id} </div>
     <div class="list-group-item">Email: ${this.email} </div>
     <div class="list-group-item">Office: ${this.officeNumber}</div>
   </div>
 </div>`

 }

}
module.exports = Manager;