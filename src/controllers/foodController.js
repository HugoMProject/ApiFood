const { readDbJson } = require("../services/help");
let AllFoods =[]
const showFoods = ()=>{
  let foods = readDbJson();
   for (let i = 0; i < foods.length; i++) {
     AllFoods.push(foods[i]);
   }
}

const getAll_Json = (req, res) => { 
    const AllFoods = readDbJson();
    if (AllFoods.length <= 0) {
        res.status(404).json({
        status: 'error',
        message: 'no Product found'
    });
  };
  res.status(200).json(AllFoods); 
  };

showFoods()
  module.exports = {
    getAll_Json,
    showFoods,
    AllFoods
  }