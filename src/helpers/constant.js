module.exports = {
    statusCode:{
        OK:200,
        CREATED:201,
        CONFLICT:409,
        BAD_REQUEST:400,
        INTERNAL_SERVER_ERROR:500,
        NOT_FOUND:404,
        UNPROCESSABLE_ENTITY:422
    },
    urlShortnerMessage:{
        ALL: 'All the short URLs fetched successfully',
        ADD:'Short URL created successfully',
        EXISTS:'URL already exists',
        NOT_FOUND:'URL not exists',
        MODIFIED:"URL modified successfully",
        DELETED:"URL deleted successfully",
        FETECHED:"Url fetched successfully"
    }
}