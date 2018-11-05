const chai = require('chai');
const expect = chai.expect;

const Hotel = require('../models/hotel');

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
        // it('initialise instance of the class with attribute reviewCount and sets it to 0', () => {
        //     let hotelName = 'Hilton Metropole';
        //     let hotelLocationCity = 'London';
        //     let myHotel = new Hotel(hotelName, hotelLocationCity);
        //     expect(myHotel.reviewCount).to.equal(0);
        // })
        // it('initialise instance of the class with attribute rating and sets it to 0', () => {
        //     let hotelName = 'Hilton Metropole';
        //     let hotelLocationCity = 'London';
        //     let myHotel = new Hotel(hotelName, hotelLocationCity);
        //     expect(myHotel.rating).to.equal(0);
        // })
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
});
