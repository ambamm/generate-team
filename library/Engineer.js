//creating constructors


const Employee = require("./Employee");

class Engineer extends Employee { 
    constructor(name, id, email, github) {}
}
getName() {
    return this.name;
}

getId() {
    return this.id;
}

getEmail() {
    return this.email;
}

getGithub() {
    return this.github;
}


module.exports = Engineer;
