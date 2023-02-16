//creating constructors

const Manager = require("./Employee");

class Manager extends Employee{
    
    constructor(name, id, email, officeNumber) {
       

        getName() {
            return this.name;
        }

        getId() {
            return this.if;
        }

        getEmail() {
            return this.email;
        }
        getOfficeNumber() {
            return this.officeNumber;
        }

    
}

//modules
module.exports = Manager;