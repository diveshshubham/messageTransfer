const queryService = require('../../services/queryService/queryService');

/**
   * Use to transfer message from one collection to other at scheduled time
   * @param {Object} req
   * @param {Object} res
   * @returns {Object} Response
   */
const messageTransfer = async (req, res) => {
    try {
       
       const timestamp = new Date()

       await queryService.messageTransfer(timestamp)
       
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
    messageTransfer
};