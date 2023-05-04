const { AllFoods} = require('../controllers/foodController');
const { readDbJson } = require('../services/help');
const renderHomeview = (req,res) => {
   res.render('index',{AllFoods})
}
module.exports= {
    renderHomeview
}