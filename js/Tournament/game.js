class Game {
    constructor(start, end, arena, homeTeam, awayTeam, homeScore, awayScore, status, referee, url, note){
        this.start = start;
        this.end = end;
        this.arena = arena;
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
        this.homeScore = homeScore;
        this.awayScore = awayScore;
        this.status = status;
        this.referee = referee;
        this.url = url;
        this.note = note;
    }

    setStartDate(date) {
        this.start = date;
    }

    setEndDate(date) {
        this.end = date;
    }

    setScore(homeScore, awayScore, status) {
        this.homeScore = homeScore;
        this.awayScore = awayScore;
        this.status = status;
    }
};

module.exports = Game;