let fName = prompt("Name");
let lName = prompt("Surname");
let salary = prompt("Salary");
let bonus = 500;
let finalSalary = eval(`${salary}+${bonus}`);

document.write(`
    Name: ${fName} <br> 
    Surname:  ${lName} <br>
    Salary: ${finalSalary}    
`)