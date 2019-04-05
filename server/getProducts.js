const products = require('../products.json')


const getProducts = (req,res) =>{ 
    if(req.query){
        let {price} = req.query
        let filtered = products.filter( val => val.price >= parseInt(price))
        res.status(200).send(filtered)
    }else{
        res.status(200).send(products)
    }
}

module.exports=getProducts