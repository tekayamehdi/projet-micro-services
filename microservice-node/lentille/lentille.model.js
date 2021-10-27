const mongoose = require('mongoose');

mongoose.model('lentilles', {
    couleur: {
        type: String,
        required: true
    },
    marque: {
        type: String,
        required: true
    },
    prix: {
        type: Number,
        required: true
    }
});