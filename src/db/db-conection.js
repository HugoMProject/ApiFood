const db = require('./dataBase.json');

const renderFood = ()=>{
    let dbFood = db
    let foods = dbFood.forEach(food => {return food})
    console.log(foods)
}

module.exports = {renderFood}; 