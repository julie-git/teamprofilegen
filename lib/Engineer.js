const Employee = require("./employee");

class Engineer extends Employee{
    constructor(name,id,role,github){
      super(name,id,role);
    //   this.officeNumber=officeNumber;
      this.github=github;
      this.role = "Engineer"
    }


 getRole(){
    console.log("getRole");
    return this.role;
 }

//  getOfficeNumber(){
//      return this.officeNumber;
//  }

 getGithub(){
     return this.github;
 }

 generateHTML(){
   return `<div class="card bg-light mb-3" style="max-width: 18rem;">
   <div class="card-header">
     <h4><strong>${this.name}</strong></h4>
     <h5>
       <strong<i class="fas fa-glasses"></i></i>   ${this.role}</strong>
     </h5>
   </div>
   <div class="card-body">
     <div class="list-group-item">Id: ${this.id} </div>
     <div class="list-group-item">Email: ${this.email} </div>
     <div class="list-group-item">Github: ${this.github}</div>
   </div>
 </div>`
 }

}
module.exports = Engineer;