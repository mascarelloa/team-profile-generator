const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const teamMembers = [];
const generateHTML = require("./generatehtml");


//This is the function that is called to start creating the team, starting with the manager.
const createManager = () => {
    //These are the prompt questions for creating the manager.
    inquirer.prompt ([
            {
                type: "input",
                name: "name",
                message: "What is the team manager's name?",
                //This will return a message to enter a valid name if nothing is entered before continuing.
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Please enter a valid name."
                }
            },
            {
                type: "input",
                name: "id",
                message: "What is the team manager's ID#?",  
                //This will return a message to enter a valid ID if nothing is entered before continuing.
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Please enter a valid ID#."
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is the team manager's email?",
                //This will return a message to enter a valid email if an invalid format is entered before continuing.
                validate: data => {
                    if(data.match(/\S+@\S+\.\S+/)) {
                        return true
                    }
                    return "Please enter a valid email address."
                },
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the team manager's office number?", 
                //This will return a message to enter a valid office number if nothing is entered before continuing.
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Please enter a valid office number."
                }
            },
            //This ends the manager questions and asks user to create another team member or complete the team.
            {
                type: "list",
                name: "newMember",
                choices: ["Manager", "Engineer", "Intern", "The team is complete!"],
                message: "Would you like to add another team member?",  
            },
            

        //This creates the new manager object with all the data from the questions.
        ]).then((answers) => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
            //This pushes the object into the empty array that will hold the team members. 
            teamMembers.push(manager)
            let addMember = answers.newMember !== "The team is complete!"
            let memberType = answers.newMember;

            if (!addMember) {
                createFile();
                return;
            }

            //If team is not complete, this will prompt the function for whatever team member type the user selects 
            while (addMember) {
                if (memberType === "Manager") {
                    createManager();
                } else if (memberType === "Engineer") {
                    createEngineer();
                } else if (memberType === "Intern") {
                    createIntern();
                }
                //This ends the while loop.
                return;
                }
                //This logs the data collected. 
                console.log(teamMembers)
            })

 }

//This creates an engineer.
const createEngineer = () => {     
    inquirer.prompt ([
            {
                type: "input",
                name: "name",
                message: "What is the Engineer's name?",
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Please enter a valid name."
                }
            },
            {
                type: "input",
                name: "id",
                message: "What is the Engineer's ID#?",  
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Please enter a valid ID#."
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is the Engineer's email?",
                validate: data => {
                    if(data.match(/\S+@\S+\.\S+/)) {
                        return true
                    }
                    return "Please enter a valid email address."
                },
            },
            {
                type: "input",
                name: "github",
                message: "What is the Engineer's GitHub username?", 
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Please enter a valid ID#."
                }
            },
            {
                type: "list",
                name: "newMember",
                choices: ["Manager", "Engineer", "Intern", "The team is complete!"],
                message: "Would you like to add another team member?",  
            },
            


        ])
        
        .then((answers) => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)

            teamMembers.push(engineer)
            let addMember = answers.newMember !== "The team is complete!"
            let memberType = answers.newMember;

            if (!addMember) {
                createFile();
                return;
            }

            while (addMember) {
                if (memberType === "Manager") {
                    createManager();
                } else if (memberType === "Engineer") {
                    createEngineer();
                } else if (memberType === "Intern") {
                    createIntern();
                }
                return;
                }
                console.log(teamMembers);

        })
    
 }
 
//This creates an intern.
 const createIntern = () => {
        
    inquirer.prompt ([
            {
                type: "input",
                name: "name",
                message: "What is the Intern's name?",
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Please enter a valid name."
                }
            },
            {
                type: "input",
                name: "id",
                message: "What is the Intern's ID#?",  
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Please enter a valid ID#."
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is the Intern's email?",
                validate: data => {
                    if(data.match(/\S+@\S+\.\S+/)) {
                        return true
                    }
                    return "Please enter a valid email address."
                },
            },
            {
                type: "input",
                name: "school",
                message: "What school does your Intern go to?", 
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Please enter a valid ID#."
                }
            },
            {
                type: "list",
                name: "newMember",
                choices: ["Manager", "Engineer", "Intern", "The team is complete!"],
                message: "Would you like to add another team member?",  
            },
            


        ])
        
        .then((answers) => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school)

            teamMembers.push(intern)
            let addMember = answers.newMember !== "The team is complete!"
            let memberType = answers.newMember;

            if (!addMember) {
                createFile();
                return;
            }

            while (addMember) {
                if (memberType === "Manager") {
                    createManager();
                } else if (memberType === "Engineer") {
                    createEngineer();
                } else if (memberType === "Intern") {
                    createIntern();
                }
                return;
                }
                console.log(teamMembers);

        })


    
 }
 //This calls the first main function to start the program. 
 createManager();




const createFile = () => {

fs.writeFile('index.html', generateHTML(teamMembers), (err) =>
err ? console.log(err) : console.log('Successfully created index.html!'))
}