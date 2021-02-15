const Companion = require("./companion");

class Fan {
    constructor(name, phone, tckn, hasCompanion, wheelchair){
        this.name = name;
        this.phone = phone;
        this.tckn = tckn;
        this.hasCompanion = hasCompanion;
        this.wheelchair = wheelchair;
        this.companion = null;
    }

    addCompanion(name, phone, tckn) {
        const companion = new Companion(name, phone, tckn);

        this.companion = companion;
        this.hasCompanion = true;

        return companion
    }
};

module.exports = Fan;