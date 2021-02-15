const Person = require("./person");

class Team {
    constructor(branch, teamType, title, image, homepage){
        this.branch = branch;
        this.teamType = teamType;
        this.title = title;
        this.image = image;
        this.homepage = homepage;
        this.persons = [];
    }

    showHomepage() {
        this.homepage = !this.homepage;
    }

    addPerson(personType, position, name, number, natioanlity, homepage) {
        const person = new Person(personType, position, name, number, natioanlity, homepage);

        this.persons.push(person);

        return person;
    }
};

module.exports = Team;