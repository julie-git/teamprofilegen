class Employee{
    constructor(name,id,email){
        this.name = name;
         this.id = id;
        //  this.title=title;
         this.email=email;
         this.role="Employee"
    }

getName(){
     console.log("getName");
      
     return this.name;
    }

getId(){
    console.log("getId");
    // id = 5;
    return this.id;
}
 getEmail(){
     console.log("getemail");
     return this.email;
 }
 getRole(){
    console.log("getRole");
    return this.role="Employee";
 }

}
module.exports = Employee;

// const e= new Employee("Julie",5,"Boss Lady");
// let myname = e.getName();
// console.log(myname);