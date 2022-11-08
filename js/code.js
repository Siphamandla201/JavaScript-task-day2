// let fName = prompt("Name");
// let lName = prompt("Surname");
// let salary = prompt("Salary");
// let bonus = 500;
// let finalSalary = eval(`${salary}+${bonus}`);

// document.write(`
//     Name: ${fName} <br> 
//     Surname:  ${lName} <br>
//     Salary: ${finalSalary}    
// `)

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }