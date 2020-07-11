const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const htmlRenderer = require("./lib/htmlRenderer")
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const EmployeeArray = []
let id = EmployeeArray.length
function menu(){
    inquirer.prompt({
        type:"list",
        message: "Which type of employee do you want create?",
        choices: ["Manager", "Engineer", "Intern","quit"],
        name: "employeeType"
    })
    .then(function(input){
        switch(input.employeeType){
            case "Manager":
                addManager()
            break 
            case "Engineer":
                addEngineer()
                break
                case "Intern":
                    addIntern()
                    break
                default:
                makeTeamhtml()
                break
        }
    })
}

function makeTeamhtml(){
    console.log(EmployeeArray)
   const team = htmlRenderer(EmployeeArray)
   console.log(team)

   fs.writeFile("./index.html",team,function(err){
       if(err) throw err
       console.log("sucess!")
   })
}
function addManager(){
    inquirer.prompt([{
        type: "input",
        message: "What is your name?",
        name: "name",

       

    },
   
    {
        type: "input",
        messsage: "What is your Email?",
        name: "email",
    },
    {
        type: "input",
        messsage: "What is your office number?",
        name: "officenumber",
    }
]).then(function(input){
      const manager = new Manager(input.name,id++,input.email,input.officenumber) 
      
      EmployeeArray.push(manager)
      menu()
})
}

function addEngineer(){
    inquirer.prompt([{
        
        type: "input",
        messsage: "What is your name?",
        name: "name"

    },
    {
        type: "input",
        message: "What is your github account?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    }
]).then(function(input){
    const engineer = new Engineer(input.name, id++, input.email, input.github)
   EmployeeArray.push(engineer)
   menu()

})

}

function addIntern(){
    inquirer.prompt([{
        type: "input",
        message: "What is your name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
    {
        type: "input",
        messaage: "What school did you attend?",
        name: "school"
    }
]).then(function(input){
    const intern = new Intern(input.name, id++, input.email, input.school)
    EmployeeArray.push(intern)
    menu()
})
}

function Employee(){
    return inquirer.prompt([

        {
            type: "input",
            message: "Enter your name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your ID?",
            name: "id"
        },
        {
            type: "input",
            message: "Enter your GitHub username?",
            name: "github"
        },
        {
            type: "input",
            message: "School Name?",
            name: "schoolname",
        },
        {
            type: "input",
            message: "What is your office number?",
            name: "officenumber"
        },
    ])}
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
// function call to initialize program
// function to initialize program
async function init() {
    try {
        // const response = await promptUser();
   menu()
       
       

    } catch (err) {
        console.log(err);
    }
}

// function call to initialize program
init();