const mongoose = require('mongoose');
const cities = require('./cities');
const {places, descriptors} = require('./seedHelpers')
const Campground = require('../models/campground')


mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')

const db = mongoose.connection;
db.on('error',console.error.bind(console,"connection error:"));
db.once('open',()=>{
    console.log('Database connected');
})

const sample = array => array[Math.floor(Math.random()* array.length)];

const seedDB = async()=>{
    await Campground.deleteMany({});
    for(let i = 0; i < 300 ; i++){
        const random1000 = Math.floor(Math.random()*1000);
        const price = Math.floor(Math.random()*20)+10;
        const camp = new Campground({
            author:'6743377c4c09c01ff8d738a1',
            title:`${sample(descriptors)} ${sample(places)}`,
            location:`${cities[random1000].city},${cities[random1000].state}`,
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus necessitatibus modi veniam, dolore laborum sequi officiis in adipisci veritatis, quod nisi dignissimos soluta. Minus nulla vel excepturi, voluptatum commodi dolores.',
            price,
            geometry:{
                type: 'Point',
                coordinates:[
                  cities[random1000].longitude,
                  cities[random1000].latitude
                ]
            },
            images:[
                {
                  url: 'https://res.cloudinary.com/dfmdqbghk/image/upload/v1732723000/YelpCamp/r5pmydjrmtiz7zlbeby3.jpg',
                  filename: 'YelpCamp/r5pmydjrmtiz7zlbeby3',
                },
                {
                  url: 'https://res.cloudinary.com/dfmdqbghk/image/upload/v1732723004/YelpCamp/kwjob4k325bzgzmwiztl.jpg',
                  filename: 'YelpCamp/kwjob4k325bzgzmwiztl',
                },
                {
                  url: 'https://res.cloudinary.com/dfmdqbghk/image/upload/v1732723004/YelpCamp/yxd0xlq79syvhcywgj5e.jpg',
                  filename: 'YelpCamp/yxd0xlq79syvhcywgj5e',
                }
              ]
        })
        await camp.save()
    }
}

seedDB().then(()=>{
    mongoose.connection.close();
})