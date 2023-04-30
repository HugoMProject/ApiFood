const db = require('../db/db-conection')

const renderHomeview = (req,res) => {
   res.render('index')
}
module.exports= {
    renderHomeview
}