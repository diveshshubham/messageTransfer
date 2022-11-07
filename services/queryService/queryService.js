const model = require('../../models/index')

//this will insert the message and time from body to database
const messageInsert = async (timestamp, message) => {
    try {
        let messageObj = new model.messageModel({
            message: message,
            timeStamp: timestamp
        })

        await messageObj.save()

    } catch (err) {
        console.log(err)
    }
}

//this will compare the timing and if its gets matched then it will transfer it from 
//post message to transfered message collection
const messageTransfer = async (timeStamp) => {
    try {
        const cursor = model.messageModel.find({
            timeStamp: timeStamp
        }).cursor();
        cursor.on("data", async (doc) => {
            try {

                if (doc.message) {
                    let receivedMessageModel = new model.messageTransferModel({
                        recieivedMessage: doc.message,
                        scheduledOn: doc.timeStamp,
                        createdAt: new Date(),
                        createdAt: new Date()
                    })
                    await receivedMessageModel.save()
                } else {
                    console.log("no message scheduled");
                }
            } catch (error) {
                console.log("err", error);
                res.serverError(error);
            }
        });
        cursor.on("end", () => {
            console.log("stream end");
        });
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    messageInsert: messageInsert,
    messageTransfer: messageTransfer
}