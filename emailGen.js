//Generates an email based on employee data

console.log("Generating email addresses...");

//raw employee data
const employeesDat = [
    "Logan Haroldsen 64775",
    "Christy Harrington 95257",
    "Vickie Hull 77973",
    "Levi Neely 10582",
    // Here's the main change, added my name and removed others
];

//return a generated email based on employee object data
const genEmail = function(employeeObj) {

    //generate the parts to the email
    let lastNamePart = employeeObj.lastName.slice(0, 7).toLowerCase();  //gets the first 7 letters of the last name lowercase
    let firstNameInitial = employeeObj.firstName[0].toLowerCase();      //gets the first initial of the first name lowercase
    let idPart = employeeObj.id.slice(0,2);                             //gets the first 2 digits of the id
    
    console.log(`Chop it: first name letter: ${firstNameInitial}, last name group: ${lastNamePart}, id digits: ${idPart}`);
    
    //puts all the email parts together and returns it
    return `${lastNamePart}${firstNameInitial}${idPart}@company.com`;
}

//returns an object with the employee data
const parceEmployee = function(employee){
    console.log("\nData to process:", employee);
    
    //splits the employee data and puts it into an object
    let employeeDat = employee.split(" ");
    let employeeObj = {
        firstName: employeeDat[0],
        lastName: employeeDat[1],
        id: employeeDat[2],
    };

    console.log(`Get data: first name: ${employeeObj.firstName}, last name: ${employeeObj.lastName}, id ${employeeObj.id}`);

    //generate the email to the employee
    employeeObj.email = genEmail(employeeObj);

    console.log("email:", employeeObj.email);
    

    return employeeObj;
}

//array for the employees formatted in an object
let employees = [];

//turn each employee data into an object
employeesDat.forEach(function(employee){
    //turn the employee data into an object
    let employeeObj = parceEmployee(employee);
    
    //send the employee object into the array
    employees.push(employeeObj);
})

console.log("\nEvery employee:", employees)
