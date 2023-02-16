//creating constructors (do we do methods too?)

const Employee = require("./Employee");

class Engineer extends Employee {
   
    constructor(name, id, email, ) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
    return this.name;
    }
    
    getId() {
        return this.id;
    }
getEmail () {
    return this.email;
}

//create methods

module.exports = Employee;