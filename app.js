const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");



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

var EmployeeAry = [];

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "type",
      message: "What type of employee will be entered?"
    }

  ]);
}

async function init() {

  console.log("init")
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
        var newIntern = new Intern();
        newIntern.name = answers.name;
        newIntern.id = answers.id;
        newIntern.email = answers.email;
        newIntern.school = answers.school;
        EmployeeAry.push(newIntern);
        console.log(EmployeeAry);
      }

     }



  // } catch (err) {
  //   console.log(err);
  // }
}


init();