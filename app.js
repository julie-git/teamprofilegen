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

var cardsArray = [];
var htmlArray= [];

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
    // console.log(employeetype.type)

      if (roletype.toLowerCase() === "manager") {
        console.log("Manager ")
        let answers =  await managerQuestion();
        var newManager = new Manager();
        newManager.name = answers.name;
        newManager.id = answers.id;
        newManager.email = answers.email;
        newManager.officeNumber = answers.office;
        //Need to get the office numbers;
        let newManagerCard= newManager.generateHTML();
        cardsArray.push(newManagerCard);
        // console.log(newManagerCard);
      }

      if (roletype.toLowerCase() === "intern") {
        console.log("intern")
        let answers = await internQuestion();
        let newIntern = new Intern();
        newIntern.name = answers.name;
        newIntern.id = answers.id;
        newIntern.email = answers.email;
        newIntern.school = answers.school;
        let newInternCard= newIntern.generateHTML();
       cardsArray.push(newInternCard);
        // console.log(newInternCard);
      }

      if (roletype.toLowerCase() === "engineer") {
        console.log("engineer")
        let answers = await engineerQuestion();
        let newEngineer = new Engineer();
        newEngineer.name = answers.name;
        newEngineer.id = answers.id;
        newEngineer.email = answers.email;
        newEngineer.github = answers.github;
        let newEngineerCard = newEngineer.generateHTML();
        cardsArray.push(newEngineerCard);
        // console.log(newEngineerCard);
      }

     }

     //create index.html file
     let cardString = cardsArray.join("");
     generateHTML(cardString);


  } catch (err) {
    console.log(err);
  }
}

//**************generate index.html page********************/
function generateHTML(cardString) {
  console.log("generating HTML");
  const html = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"> -->
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="style.css" />
      <title>Development Team</title>
    </head>
     <body>
     <div class="jumbotron">
          <div class = "row jumbo-4 text-center">
          <h1>Development Team Staff</h1>
          </div>
      </div>
      <div class="row d-flex justify-content-around">
      ${cardString}
     </div>
      </body>
     </body>
      <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
      <script src="./script.js"></script>
    </html>`
    writeFileAsync('index.html', html, 'utf8');
}
//********************************Calling Functions*************************************************/

init();