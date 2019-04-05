const products = require('../products.json')

const getProduct = (req,res) => {
    let { id } = req.params
    let [product] = products.filter( val => val.id == id)
    console.log(product)
    if(!product) res.sendStatus(404)
    res.status(200).send(product)
   
}

module.exports = getProduct