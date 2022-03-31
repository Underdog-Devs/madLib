const mongoose = require('mongoose')

const StorySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        required: true
    },
    paragraphs: [
        {
            text: {
                type: String,
                required: true
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ],
    users: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user'
            },
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('story', StorySchema)