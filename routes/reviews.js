const express = require('express');
const router = express.Router({mergeParams:true});

const Campground = require('../models/campground');
const Review = require('../models/review.js');
const catchAsync = require('../utils/catchAsync');

const {validateReview} = require('../middleware.js')
const {isLoggedIn} = require('../middleware.js');

router.post('/',isLoggedIn ,validateReview, catchAsync( async (req, res)=>{
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review);
    campground.reviews.push(review);
    await review.save();
    await campground.save();
    req.flash('success','Added the review!');
    res.redirect(`/campgrounds/${campground._id}`);
}))

router.delete('/:reviewId', catchAsync(async(req, res)=>{
    const{id , reviewId} = req.params;
    await Campground.findByIdAndUpdate(id, {$pull: {reviews : reviewId}})
    await Review.findByIdAndDelete(req.params.reviewId);
    req.flash('success','Successfully deleted review!');
    res.redirect(`/campgrounds/${id}`);
}))

module.exports = router;