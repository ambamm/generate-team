const Manager = require("./Employee");
//constructors
class Manager extends Employee{
    //create constructor
    constructor(name, id, email, officeNumber) {
        //super(name, id, email);

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