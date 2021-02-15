const Fan = require("./fan");

class Event {
    constructor(title, capacity, date){
        this.title = title;
        this.capacity = capacity;
        this.date = date;
        this.fans = [];
    }

    makeReservation(name, phone, tckn, hasCompanion, wheelchair) {
        const fan = new Fan(name, phone, tckn, hasCompanion, wheelchair);

        this.fans.push(fan);

        return fan;
    }
};

module.exports = Event;