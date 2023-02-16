const Employee = require("./Employee");
//constructors
class Engineer extends Employee {
    //create constructor
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