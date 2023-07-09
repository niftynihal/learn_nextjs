const mongoose = require("mongoose")

export async function connect(){
    try{
        mongoose.connect(process.env.MONGODB_URL)
        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("MongoDB connected successfully")
        })

        connection.on("error", (err) => {
            console.log(err)
            process.exit();
        })
    }
    catch(error){
        console.log("Error while connecting to DB! something went wrong")
        console.log(error)
    }
}


