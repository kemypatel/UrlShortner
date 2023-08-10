const {statusCode} = require('./constant')
module.exports = {
    respondSuccess: async(req,res,message,StatusCode = statusCode.OK,data)=>{
        res.status(StatusCode).json({
            success:true,
            message:!message ?'query was successfull': message,
            data,
        })
    },
    respondFailure: async(req,res,message,StatusCode = statusCode.NOT_FOUND,data)=>{
        res.status(StatusCode).json({
            success:false,
            message:!message ?'something went wrong': message,
            data,
        })
    },
    respondError: (res,message,statusCode)=>{
        const error = new Error(`${message}`)
        error.statusCode= statusCode
        error.message = message
        return res.status(statusCode).json(
            {
                success:false,
                message:!message?"something went worng":message
            }
        )
    },
    getMessageFromValidationError: (error)=>{
        const message = error.details[0].message.replace(/\"/g,"")
        return message 
    }
}