// Import mongoose database Connection

const db = require('../../database/mongo/connection');
const Schema = db.mongoose.Schema;

const tranferMessageSchema = new Schema({
    'recieivedMessage': {
        type: String,
        //required:true
    },
    'scheduledOn': {
        type: String
    },
    'createdAt': {
        type: Date,
        default: Date.now
    },
    'updatedAt': {
        type: Date,
        default: Date.now
    },
});

const transferedMessageModel = db.mongoose.model('transferedMessageModel', tranferMessageSchema, 'transferedMessage');
module.exports = transferedMessageModel;