const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");



const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);


function managerQuestion() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: "input",
      name: "id",
      message: "Enter your Employee Id?"
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email"
    },
    {
      type: "input",
      name: "office",
      message: "What is your office number?"
    }

  ]);
}

function internQuestion() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: "input",
      name: "id",
      message: "Enter your Employee Id?"
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email"
    },
    {
      type: "input",
      name: "school",
      message: "What is your school?"
    }

  ]);
}


function engineerQuestion() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: "input",
      name: "id",
      message: "Enter your Employee Id?"
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email"
    },
    {
      type: "input",
      name: "github",
      message: "What is your Github Id?"
    }

  ]);
}

var EmployeeAry = [];

function promptUser() {
  return inquirer.prompt([
     
    {
      type: "input",
      name: "type",
      message: "What type of employee will be entered?  (Manager,Engineer,Intern) stop to quit entering employees"
    }

  ]);
}

async function init() {

  console.log("init")
  try{
    let roletype = "notstop"
    while (!(roletype === "stop")) {
    let employeetype = await promptUser();
    roletype = employeetype.type;
    console.log(employeetype.type)

      if (roletype.toLowerCase() === "manager") {
        console.log("Manager ")
        let answers =  await managerQuestion();
        var newManager = new Manager();
        newManager.name = answers.name;
        newManager.id = answers.id;
        newManager.email = answers.email;
        newManager.officeNumber = answers.office;
        //Need to get the office numbers;
        EmployeeAry.push(newManager);
        console.log(EmployeeAry);
      }

      if (roletype.toLowerCase() === "intern") {
        console.log("intern")
        let answers = await internQuestion();
        let newIntern = new Intern();
        newIntern.name = answers.name;
        newIntern.id = answers.id;
        newIntern.email = answers.email;
        newIntern.school = answers.school;
        EmployeeAry.push(newIntern);
        console.log(EmployeeAry);
      }

      if (roletype.toLowerCase() === "engineer") {
        console.log("engineer")
        let answers = await engineerQuestion();
        let newEngineer = new Engineer();
        newEngineer.name = answers.name;
        newEngineer.id = answers.id;
        newEngineer.email = answers.email;
        newEngineer.github = answers.github;
        EmployeeAry.push(newEngineer);
        console.log(EmployeeAry);
      }

     }



  } catch (err) {
    console.log(err);
  }
}


init();