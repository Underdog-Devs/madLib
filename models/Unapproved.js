const mongoose = require('mongoose')

const UnapprovedSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    // story: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'story'
    // },
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('UnapprovedSchema', UnapprovedSchema)