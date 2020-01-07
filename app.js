const Employee = require("./lib/Employee");


const e = new Employee("Julie",1,"Manager");

let ename = e.getName;
console.log(ename);