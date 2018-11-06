const chai = require('chai');
const expect = chai.expect;

const Hotel = require('../models/Hotel');

describe('Hotel class', () => {
    it('is a class', () => {
        let myHotel = new Hotel();
        expect(myHotel).to.be.an.instanceof(Hotel);
    })

    describe('#constructor', () => {
        it('takes name and location and sets them as attributes', () => {
            let hotelName = 'Hilton Metropole';
            let hotelLocationCity = 'London';
            let myHotel = new Hotel(hotelName, hotelLocationCity);
            expect(myHotel.name).to.equal(hotelName);
            expect(myHotel.city).to.equal(hotelLocationCity);
        })
        it('initialise instance of the class with attribute reviews as an empty array', () => {
            let hotelName = 'Hilton Metropole';
            let hotelLocationCity = 'London';
            let myHotel = new Hotel(hotelName, hotelLocationCity);
            expect(myHotel.reviews).to.deep.equal([]);
        })
    })

    describe('#reviewCount method', () => {
        it('should return a total review count', () => {
            let hotelName = 'Hilton Metropole';
            let hotelLocationCity = 'London';
            let myHotel = new Hotel(hotelName, hotelLocationCity);
            let result = myHotel.reviewCount();
            expect(result).to.equal(0);
        })
    })

    describe('#rating method', () => {
        it('should return an average rating', () => {
            let hotelName = 'Hilton Metropole';
            let hotelLocationCity = 'London';
            let myHotel = new Hotel(hotelName, hotelLocationCity);
            let result = myHotel.rating();
            expect(result).to.equal(0);
        })
    })

    xdescribe('#ratingAsStars method', () => {
        it('should return a total star rating', () => {
            let hotelName = 'Hilton Metropole';
            let hotelLocationCity = 'London';
            let myHotel = new Hotel(hotelName, hotelLocationCity);
        })
    })

    describe('#urlSlug method', () => {
        it('should return name and city as string with words separated by underscore', () => {
            let hotelName = 'Hilton Metropole';
            let hotelLocationCity = 'London';
            let myHotel = new Hotel(hotelName, hotelLocationCity);
            let result = myHotel.urlSlug();
            expect(result).to.equal('hilton_metropole_london');
        })
    })
});
