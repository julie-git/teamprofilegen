class Employee{
    constructor(name,id,email,title){
        this.name = name;
         this.id = id;
         this.title=title;
         this.email=email;
    }

getName(){
     console.log("getName");
    //  name = "Bob";
     
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

const e= new Employee("Julie",5,"Boss Lady");
let myname = e.getName();
console.log(myname);