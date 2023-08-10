const mongoose = require('mongoose')
const {Schema} = mongoose;

const urlShortnerSchema = new Schema(
    {
        full_url:{
            type:String,
            required:true
        },
        short_url:{
            type:String,
            default:""
        }
    },
    {
        timestamps:true
    }
)
module.exports = mongoose.model('shorturls', urlShortnerSchema)