const fs = require('fs');

const readDbJson = ()=>{
    let Foods = fs.readFileSync(__dirname + '../../db/dataBase.json')
    return JSON.parse(Foods)
}
module.exports = {readDbJson};