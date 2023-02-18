//use express
const router = require('express').Router();

//set files used
const homeRoutes = reuqire('./homeRoutes.js');
const apiRoutes = require('./api');


//use homeRoutes by default
router.use('/', homeRoutes);
//use apiRoutes with /api
router.use('/api', apiRoutes);

module.exports = router;