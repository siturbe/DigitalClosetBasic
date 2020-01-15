const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const garmentSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    brand: String,
    color: String,
    picture: String,
    type: String,
    dateWorn: [Date],
    peopleSeen: [String],
    events: [String],
    topOrBottom: String,
    email: String,
    dateCreated: {type: Date, default: Date.now }
}, {
    collection: 'garments'
})

module.exports = mongoose.model('Garment', garmentSchema)