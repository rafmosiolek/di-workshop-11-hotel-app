class Hotel {
    constructor(name, city) {
        this.name = name;
        this.city = city;
        this.reviews = [];

        this.allRatings = [];
    }   

    reviewCount() {
        return this.reviews.length;
    }

    rating() {
        let average = 0;
        for (let i = 0; i < this.allRatings.length; i++) {
            average += this.allRatings[i];
        }
        return Math.ceil(average);
    }

    urlSlug() {
        let separatedName = this.name.split(" ").join("_");
        let separatedCity = this.city.split(" ").join("_");
        return (separatedName + "_" + separatedCity).toLowerCase();
    }
}

module.exports = Hotel;