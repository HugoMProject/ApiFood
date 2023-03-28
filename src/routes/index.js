const express = require('express');
const router = express.Router();
const { renderHomeview } =require('../controllers/routeControllers')

router.get('/',renderHomeview);


module.exports= router;