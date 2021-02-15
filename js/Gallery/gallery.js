const Image = require("./image");

class Gallery {
    constructor(language, title){
        this.language = language;
        this.title = title;
        this.images = [];
    }

    addImage(filename, favorite) {
        const image = new Image(filename, favorite);

        this.images.push(image);

        return image;
    }
};

module.exports = Gallery;