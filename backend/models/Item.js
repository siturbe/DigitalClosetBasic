const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    profileImg: {
        type: String
    }
}, {
    collection: 'items'
})

module.exports = mongoose.model('Item', itemSchema)