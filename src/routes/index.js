const express = require('express');
const router = express.Router();
const { renderHomeview } =require('../controllers/routeControllers');
const { renderFood } = require('../db/db-conection');

router.get('/',renderHomeview);


module.exports= router;