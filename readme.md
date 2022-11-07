# Transfer message from one collection to other

## Assumptions

- A CRON job is running every minute which hits GET http://localhost:8089/transferMessage path which checks the current timestamp in message collection if any time gets mathched then the transfer of message taks place


## How to Start

- install the pacakages and dependencies by running npm install --save
- make and .env file and write your credentials there as per the envFile.txt file
- after installation of npm pacakages run the command npm start or nodemon server.js in the   default project directory
- parallely run cronSimulator.js file to hit http://localhost:8089/transferMessage every minute or second

## Author

**Shubham Divesh**

- [Profile](https://github.com/diveshshubham "Shubham Divesh")
- [Email](mailto:divesh.shubham@gmail.com?subject=Hi "Hi!")


## 🤝 Support

Contributions, issues, and feature requests are welcome!

Give a ⭐️ if you like this project!