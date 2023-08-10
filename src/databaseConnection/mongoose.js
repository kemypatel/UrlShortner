const mongoose = require('mongoose')
mongoose.connection.on('connected',()=>{
    console.log("MongoDB is connected!")
})
mongoose.set("debug", true);
mongoose.connection.on('error', (err) => {
    console.log(`Could not connect to MongoDB because of ${err}`);
    process.exit(-1);
  });
exports.connect = async()=>{
    // console.log(process.env.MONGODB)
    mongoose.connect(process.env.MONGODB,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
}