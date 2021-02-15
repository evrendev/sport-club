const Game = require("./game");
const Penalty = require("./penalty");
const Club = require("./club");
const Rule = require("./rule");

class Phase {
    constructor(level, wonPoint, drawPoint, losePoint){
        this.level = level;
        this.wonPoint = wonPoint;
        this.drawPoint = drawPoint;
        this.losePoint = losePoint;
        this.games = [];
        this.rules = [];
        this.penalties = [];
        this.clubs = [];
    }

    addGames(tart, end, arena, homeTeam, awayTeam, homeScore, awayScore, status, referee, url, note) {
        const game = new Game(tart, end, arena, homeTeam, awayTeam, homeScore, awayScore, status, referee, url, note);

        this.games.push(game);

        return game;
    }

    addPenalties() {
        const penalty = new Penalty(point);

        this.games.push(penalty);

        return game;
    }

    addClubs() {
        const club = new Club(title, image);

        this.clubs.push(club);

        return club;
    }

    addRules() {
        const rule = new Rule(standing, title, description, color);

        this.rules.push(rule);

        return rule;
    }
};

module.exports = Phase;