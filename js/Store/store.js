class Store {
    constructor(title, phone, addressLine1, addressLine2, country, city, region, state, postalCode, lat, lng, weekdayOpenTime, weekdayCloseTime, weekendOpenTime, weekendCloseTime, image){
        this.title = title;
        this.phone = phone;
        this.addressLine1 = addressLine1;
        this.addressLine2 = addressLine2;
        this.country = country;
        this.city = city;
        this.region = region;
        this.state = state;
        this.postalCode = postalCode;
        this.lat = lat;
        this.lng = lng;
        this.weekdayOpenTime = weekdayOpenTime;
        this.weekdayCloseTime = weekdayCloseTime;
        this.weekendOpenTime = weekendOpenTime;
        this.weekendCloseTime = weekendCloseTime;
        this.image = image;
    }
};

module.exports = Store;