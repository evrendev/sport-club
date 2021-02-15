const Academy = require("../Academy/app");
const Team = require("../Team/team");

class Branch {
    constructor(branchType, category, title, description, image, playerPositions, staffPositions) {
        this.branchType = branchType;
        this.category = category;
        this.title = title;
        this.description = description;
        this.image = image;
        this.playerPositions = playerPositions;
        this.staffPositions = staffPositions;
        this.academies = [];
        this.teams = [];
    }

    addAcademy(title, phone, addressLine1, addressLine2, country, city, region, state, postalCode, lat, lng) {
        const academy = new Academy(title, phone, addressLine1, addressLine2, country, city, region, state, postalCode, lat, lng);

        this.academies.push(academy);

        return academy;
    }

    addTeams(teamType, title, image, homepage, persons) {
        const team = new Team(teamType, title, image, homepage, persons);

        this.teams.push(team);

        return team;
    }
}

module.exports = Branch;