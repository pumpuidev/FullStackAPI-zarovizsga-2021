// 1. Feladat: pótold a service modellt.

const mongoose = require('mongoose');

const ServiceSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    since: {
        type: Number,
        required: true,
        default: 0
    },
    street: {
        type: String,
    },
    city: {
        type: String,
    },
    country: {
        type: String,
    },
    active: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Service', ServiceSchema);