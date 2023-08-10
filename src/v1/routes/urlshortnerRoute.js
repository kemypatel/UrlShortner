const router = require('express-promise-router')();

const urlShortnerController = require('../controllers/urlShortnerController')

//generate short url
router.post('/shortUrl',urlShortnerController.shortUrls)
//update the long URL
router.put('/updateUrl', urlShortnerController.updateLongUrl)
//delete the URL
router.delete('/deleteURL/:id',urlShortnerController.deleteShortUrls)
//get all short and long URL
router.get('/getAllUrls', urlShortnerController.getAllUrls)
//get Long URL from Short URL
router.get('/getLongUrl', urlShortnerController.getLongUrl)

module.exports = router