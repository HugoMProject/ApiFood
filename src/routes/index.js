const express = require('express');
const router = express.Router();
const { renderHomeview } =require('../controllers/routeController');
const { getAll_Json,showFoods } = require('../controllers/foodController');



router.get('/',renderHomeview);
router.get('/foods',getAll_Json);
router.get('/onefood',getAll_Json);
router.put('/updatefood',getAll_Json);


module.exports= router;