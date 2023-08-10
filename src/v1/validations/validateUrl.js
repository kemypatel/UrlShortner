const Joi = require('joi')

module.exports = {
    validateURLCreation : (input)=>{
        const schema = Joi.object().keys(
            {
                url:Joi.string().required()
            }
        )
        return schema.validate(input);
    }
}