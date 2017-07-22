const Product = require('../models/product');
const mongoose = require('mongoose');

mongoose.connect('localhost:27017/startshopDB')

const products = [
    new Product({
        _id: 1,
        imagePath: 'http://res.cloudinary.com/priom/image/upload/v1500681529/LP/hybrid-theory.jpg',
        title: 'Hybrid Theory',
        description: 'Hybrid Theory is the debut studio album by American rock band Linkin Park, released on October 24, 2000 through Warner Bros. Records.',
        price: 20
    }),

    new Product({
        _id: 2,
        imagePath: 'http://res.cloudinary.com/priom/image/upload/v1500681529/LP/reanimation.jpg',
        title: 'Reanimation',
        description: 'Reanimation is the first remix album by American rock band Linkin Park as a follow-up to their first studio album, Hybrid Theory, and released on July 30, 2002.',
        price: 19
    }),

    new Product({
        _id: 3,
        imagePath: 'http://res.cloudinary.com/priom/image/upload/v1500681529/LP/meteora.jpg',
        title: 'Meteora',
        description: 'Meteora is the second studio album by American rock band Linkin Park. It was released on March 25, 2003 through Warner Bros. Records.',
        price: 22
    }),

    new Product({
        _id: 4,
        imagePath: 'http://res.cloudinary.com/priom/image/upload/v1500681529/LP/minutes2midnight.jpg',
        title: 'Minutes To Midnight',
        description: 'Minutes to Midnight is the third studio album by American rock band Linkin Park, released on May 14, 2007, through Warner Bros.',
        price: 25
    }),

    new Product({
        _id: 5,
        imagePath: 'http://res.cloudinary.com/priom/image/upload/v1500681529/LP/a1000suns.jpg',
        title: 'A Thousand Suns',
        description: 'A Thousand Suns is the fourth studio album by American rock band Linkin Park. It was released on September 8, 2010, by Warner Bros. Records.',
        price: 23
    }),

    new Product({
        _id: 6,
        imagePath: 'http://res.cloudinary.com/priom/image/upload/v1500681529/LP/living-things.jpg',
        title: 'Living Things',
        description: 'Living Things is the fifth studio album by American rock band Linkin Park. It was released under Warner Bros. Records and Machine Shop Recordings on June 20, 2012, in Japan, and throughout the rest of the world during the following week.',
        price: 24
    }),

    new Product({
        _id: 7,
        imagePath: 'http://res.cloudinary.com/priom/image/upload/v1500681529/LP/recharged.jpg',
        title: 'Recharged',
        description: 'Recharged is the second remix album of recordings by American rock band Linkin Park. The album was released on October 29, 2013, through Warner Bros. Records and Machine Shop Recordings.',
        price: 28
    }),

    new Product({
        _id: 8,
        imagePath: 'http://res.cloudinary.com/priom/image/upload/v1500681529/LP/the-hunting-party.jpg',
        title: 'The Hunting Party',
        description: 'The Hunting Party is the sixth studio album by American rock band Linkin Park. The album, produced by band members Mike Shinoda and Brad Delson, was released by Warner Bros. Records and Machine Shop on June 13, 2014.',
        price: 27
    }),

    new Product({
        _id: 9,
        imagePath: 'http://res.cloudinary.com/priom/image/upload/v1500681529/LP/1more-light.jpg',
        title: 'One More Light',
        description: 'One More Light is the seventh studio album by American rock band Linkin Park. It was released on May 19, 2017 through Warner Bros. Records and Machine Shop, following the 2014 album The Hunting Party.',
        price: 30
    })
];

var done = 0;

for (var i = 0; i < products.length; ++i) {
    products[i].save((err, result) => {
        done++;
        if (done === products.length) {
            mongoose.disconnect();
        }
    });
}

