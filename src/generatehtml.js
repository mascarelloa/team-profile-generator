//This is the beginning of the html shell for the file.
let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
  <link rel="stylesheet" href="./assets/style.css">
  <title>My Team</title>
</head>
<body>
    <header>
    <div class="jumbotron jumbotron-fluid custom-jumbotron">
        <div class="container">
            <h1 class="display-4">Meet the Team</h1>
        </div>
    </div>
    </header>
    
    <main>
    <div class="row row-cols-1 row-cols-md-3 g-4">`

//This function generates the html for the file.
const generateHTML = (arr) => {
    //This loops through the array of generated team members anf for each it will call the correct function in the switch statement.
    arr.forEach(employee => {
        //This will use the role to call the function that will create the matching card . 
        switch(employee.getRole()) {
            //This will run the function to generate a manager card.
            case "Manager": 
            managerCard(employee);
            break;
            //This will run the function to generate an engineer card.
            case "Engineer":
            engineerCard(employee);
            break;
            //This will run the function to generate an intern card.
            default:
            internCard(employee);
            break;
        }
    });
    //This will add the closing html tags to the file.
    return html+= `
    </div>
    </main>

    </body>
    </html>
    `
}


//This will generate the html for a manager card.
const managerCard = (manager) => {
return html+=
`  <div class="col">
<div class="card shadow mb-3 rounded">
  <div class="card-body rounded">
      <div class="card-header">
      ${manager.getName()}
          <h6 class="card-subtitle mb-2"> <span><i class="fas fa-briefcase"></i></span> ${manager.getRole()}</h6>
        </div>
    
    <p class="card-text">
      <ul class="list-group list-group-flush rounded">
          <li class="list-group-item"><span>ID#:</span> ${manager.getId()}</li>
          <li class="list-group-item"><span>Email:</span> ${manager.getEmail()}</li>
          <li class="list-group-item"><span>Office Number:</span> ${manager.getOfficeNumber()} </li>
        </ul>  
  </p>
  </div>
</div>
</div>
`
}

const engineerCard = (engineer) => {
    return html+=
    `<div class="col">
    <div class="card shadow mb-3 rounded">
      <div class="card-body rounded">
          <div class="card-header">
          ${engineer.getName()}
              <h6 class="card-subtitle mb-2"> <span><i class="fas fa-tools"></i></span> ${engineer.getRole()}</h6>
            </div>
        
        <p class="card-text">
          <ul class="list-group list-group-flush rounded">
              <li class="list-group-item"><span>ID#:</span> ${engineer.getId()}</li>
              <li class="list-group-item"><span>Email:</span> ${engineer.getEmail()}</li>
              <li class="list-group-item"><span>GitHub Username:</span> ${engineer.getGithub()} </li>
            </ul>  
      </p>
      </div>
    </div>
    </div>
    `
    }

    const internCard = (intern) => {
        return html+=
        `<div class="col">
        <div class="card shadow mb-3 rounded">
          <div class="card-body rounded">
              <div class="card-header">
              ${intern.getName()}
                  <h6 class="card-subtitle mb-2"> <span><i class="fas fa-graduation-cap"></i></span> ${intern.getRole()}</h6>
                </div>
            
            <p class="card-text">
              <ul class="list-group list-group-flush rounded">
                  <li class="list-group-item"><span>ID#:</span> ${intern.getId()}</li>
                  <li class="list-group-item"><span>Email:</span> ${intern.getEmail()}</li>
                  <li class="list-group-item"><span>School:</span> ${intern.getSchool()} </li>
                </ul>  
          </p>
          </div>
        </div>
        </div>
        `
        }


        module.exports = generateHTML;