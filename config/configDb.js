const mongoose = require("mongoose")
mongoose.set("strictQuery",true)



const atlasUrl = "mongodb+srv://mongoHandson1:mongoAcess@chat-socket.h8dv5xi.mongodb.net/HR?retryWrites=true&w=majority"

// const Mongoose = new MongoClient(atlasUrl)

async function connectToDatabase(){
try{
 await mongoose.connect(atlasUrl)
  console.log("server connected with our database");
}
catch(err){
    console.log(err,"Error in making the connection with DataBase");
}
}




module.exports = connectToDatabase

