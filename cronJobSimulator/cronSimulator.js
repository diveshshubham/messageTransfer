var unirest = require('unirest');

setInterval(function () {
    var req = unirest('GET', 'http://localhost:8089/tranferMessage')
        .end(function (res) {
            if (res.error) throw new Error(res.error);
            console.log(res.raw_body);
        });
},  1000); // multiply by 60 for 1 minute