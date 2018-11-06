const chai = require('chai');
const expect = chai.expect;

const Review = require('../models/Review');

describe('Review class', () => {
    it('is a class', () => {
        let myReview = new Review();
        expect(myReview).to.be.an.instanceof(Review);
    })
})