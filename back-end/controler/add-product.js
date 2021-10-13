const rootFile = require('../util/path.js')

const path = require('path');


exports.getAddProduct = (req,res,next)=>{
    res.sendFile(path.join(rootFile, 'views', 'add-product.html'))
}

exports.postAddProducts = (req,res,next)=>{
    console.log(req.data);
    res.redirect('/shop');  //redirect to /shop
}