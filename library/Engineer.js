const Employee = require("./Employee");
// constructors
class Engineer extends Employee { // create constructor
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
