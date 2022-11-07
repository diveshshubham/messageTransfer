const queryService = require('../../services/queryService/queryService');

/**
   * Use to insert message into collection
   * @param {Object} req
   * @param {Object} res
   * @returns {Object} Response
   */
const postMessage = async (req, res) => {
    try {
        //takes message and time from body param
       const message = req.body.message

       let timestamp = req.body.timestamp      
       timestamp = new Date(timestamp)

       await queryService.messageInsert(timestamp,message)
       
        res.status(200).send({
            message: "message will be trasfered at "+timestamp+""
        })

    } catch (err) {
        res.status(500).send({
            message: `some error occured -  ${err}`,
        });
    }
};

module.exports = {
    postMessage
};