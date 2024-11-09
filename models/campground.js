const mongoose = require('mongoose');
const { type } = require('os');
const Schema = mongoose.Schema;

const CampgroundSchema = new Schema({
    title:{
        type:String
    },
    price:{
        type:String
    },
    description:{
        type:String
    },
    location:{
        type:String
    }
});

module.exports = mongoose.model('Campground',CampgroundSchema);