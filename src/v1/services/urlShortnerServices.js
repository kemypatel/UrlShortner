const shortUrlModel = require('../../models/urlShorterner')

module.exports ={
    
    validateURL:async(url)=>{
        const checkUrlExists = await shortUrlModel.find({full_url:url})
        return checkUrlExists
    },
    validateShortURL:async(id)=>{
        const checkPresent = await shortUrlModel.find({_id:id})
        return checkPresent
    },
    shortUrls : async(body) =>{
        //generate short URl
        let dateFormat = Date.now().toString();
        let subString = dateFormat.slice(-3);
        const generatedShortUrl = 'https://wee/'+Math.random().toString(36).slice(-3)+subString
        let data = {
            full_url : body.url,
            short_url : generatedShortUrl
        }
        const newShortUrl = new shortUrlModel(data)
        await newShortUrl.save()

        return data 
    },
    deleteShortUrls:async(id)=>{
        const deleteURL = await shortUrlModel.deleteOne({_id:id})
        return deleteURL
    },
    updateLongUrl:async(body)=>{
        console.log("req.body.id",body._id)
        console.log("req.body.url",body.url)
        
        const updateUrl = await shortUrlModel.updateOne(
            {
                _id:body._id
            },
            {
                $set:{
                    full_url:body.url
                }      
            }
        )
        return updateUrl;
    },
    getAllUrls:async()=>{
        const getALlUrl = await shortUrlModel.find()
        return getALlUrl;
    },
    getLongUrls:async(body)=>{
        const getLongUrl = await shortUrlModel.aggregate(
            [
                {
                    $match:{
                        short_url : body.short_url
                    }
                },
                {
                    $project:{
                        full_url:1,
                        short_url:1,
                        createdAt:1,
                    }
                }
            ]
        )
        return getLongUrl;
    }
}
