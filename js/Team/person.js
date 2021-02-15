class Person {
    constructor(personType, position, name, number, natioanlity, homepage){
        this.personType = personType;
        this.position = position;
        this.name = name;
        this.number = number;
        this.natioanlity = natioanlity;
        this.homepage = homepage;
    }

    showHomepage() {
        this.homepage = !this.homepage;
    }
};

module.exports = Person;