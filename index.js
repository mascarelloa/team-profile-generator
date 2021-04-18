const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const teamMembers = [];

const createManager = () => {
        
    inquirer.prompt ([
            {
                type: "input",
                name: "name",
                message: "What is the team manager's name?",
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
                validate: data => {
                    if(data !== ""){
                        return true
                    } 
                    return "Please enter a valid office number."
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
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)

            teamMembers.push(manager)
            let addMember = answers.newMember !== "The team is complete!"
            let memberType = answers.newMember;

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
                console.log(teamMembers)
            })

 }
    



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

 createManager();