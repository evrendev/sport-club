const Phase = require("./phase");

class Tournament {
    constructor(title, image, favorite){
        this.title = title;
        this.image = image;
        this.favorite = favorite;
        this.phases = []
    }

    addPhases(phase, start, end) {
        const phase = new Phase(phase, start, end);

        this.phases.push(phase);

        return phase;
    }

    setFavorite() {
        this.favorite = !this.favorite;
    }
};

module.exports = Tournament;