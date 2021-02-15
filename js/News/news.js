const Gallery = require("./gallery");

class News {
    constructor(title, image, description, slide, constant, publishdate){
        this.title = title;
        this.image = image;
        this.description = description;
        this.slide = slide;
        this.constant = constant;
        this.publishdate = publishdate;
        this.gallery = null;
    }

    addGallery(language, title) {
        const gallery = new Gallery(language, title);

        this.gallery = gallery;

        return gallery;
    }

    setPublishDate(date) {
        this.publishdate = date;
    }

    setSlide() {
        this.slide = !this.slide;
    }

    setConstant() {
        this.constant = !this.constant;
    }

};

module.exports = News;