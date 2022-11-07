// Import mongoose database Connection

const db = require('../../database/mongo/connection');
const Schema = db.mongoose.Schema;

const messagePostSchema = new Schema({
    'message': {
        type: String,
        required: true
    },
    'timeStamp': {
        type: String,
        required: true
    },
    'createdAt': {
        type: Date,
    }, 
    'updatedAt': {
        type: Date,
    },
});

const messageModel = db.mongoose.model('messageModel', messagePostSchema, 'postMessage');
module.exports = messageModel;