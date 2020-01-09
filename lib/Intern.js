const Employee = require("./employee");

class Intern extends Employee{
    constructor(name,id,email,school,role){
      super(name,id,email,role);
      this.school = school;
      this.role = "Intern";
    }


 getRole(){
    // console.log("getRole");
    return this.role;
 }

 getSchool(){
     return this.school;
 }

 generateHTML(){
  return `<div class="card bg-light mb-3" style="max-width: 18rem;">
  <div class="card-header">
    <h4><strong>${this.name}</strong></h4>
    <h5>
      <strong<i class="fas fa-graduation-cap"></i>   ${this.role}</strong>
    </h5>
  </div>
  <div class="card-body">
    <div class="list-group-item">Id: ${this.id} </div>
    <div class="list-group-item">Email: ${this.email} </div>
    <div class="list-group-item">School: ${this.school}</div>
  </div>
</div>`
 }
}
module.exports = Intern;