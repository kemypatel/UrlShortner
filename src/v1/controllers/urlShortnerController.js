const service = require('../services/urlShortnerServices')
const response = require('../../helpers/response')
const constants = require('../../helpers/constant')
const {validateURLCreation } = require('../validations/validateUrl')

module.exports = {
    shortUrls : async(req,res,next)=>{
        //validate that url should not be empty
        const {error} = validateURLCreation(req.body)
        if(error){
            return next(
                response.respondError(
                    res,
                    response.getMessageFromValidationError(error),
                    constants.statusCode.UNPROCESSABLE_ENTITY
                )
            )
        }
        //validate url exists
        const checkUrlExists = await service.validateURL(req.body.url)
        //check if URL exists
        if(checkUrlExists.length){
            return response.respondFailure(
                req,res,
                constants.urlShortnerMessage.EXISTS,
                constants.statusCode.CONFLICT
            )
        }
        //if not exists
        const shortendUrl = await service.shortUrls(req.body)
        if(shortendUrl){
            return response.respondSuccess(
                req,res,
                constants.urlShortnerMessage.ADD,
                constants.statusCode.CREATED,
                shortendUrl
            )
        }
    },
    deleteShortUrls:async(req,res,next)=>{
        const deletedUrl = await service.deleteShortUrls(req.params.id)
        if(deletedUrl){
            return response.respondSuccess(
                req,res,
                constants.urlShortnerMessage.DELETED,
                constants.statusCode.OK,
                deletedUrl
            )
        }
    },
    updateLongUrl:async(req,res,next)=>{
        //check Exists
        const checkUrlExists = await service.validateShortURL(req.body._id)
        console.log(checkUrlExists)
        if(checkUrlExists.length == 0){
            return response.respondFailure(
                req,res,
                constants.urlShortnerMessage.NOT_FOUND,
                constants.statusCode.NOT_FOUND
            )
        }
        const updateLongUrl = await service.updateLongUrl(req.body)
        console.log("updateLongUrl",updateLongUrl)
        if(updateLongUrl){
            return response.respondSuccess(
                req,res,
                constants.urlShortnerMessage.MODIFIED,
                constants.statusCode.OK,
                updateLongUrl
            )
        }
    },
    getAllUrls:async(req,res,next)=>{
        const getAllUrls = await service.getAllUrls()
        if(getAllUrls){
            return response.respondSuccess(
                req,res,
                constants.urlShortnerMessage.FETECHED,
                constants.statusCode.OK,
                getAllUrls
            )
        }
    },
    getLongUrl:async(req,res,next)=>{
        const getLongUrls = await service.getLongUrls(req.body)
        if(getLongUrls){
            return response.respondSuccess(
                req,res,
                constants.urlShortnerMessage.FETECHED,
                constants.statusCode.OK,
                getLongUrls
            )
        }
    }

}