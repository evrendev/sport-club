const News = require("./news");

class Category {
    constructor(language, title, image){
        this.language = language;
        this.title = title;
        this.image = image;
        this.news = [];
    }

    addNews(filename, favorite) {
        const news = new News(filename, favorite);

        this.news.push(news);

        return news;
    }
};

module.exports = Category;