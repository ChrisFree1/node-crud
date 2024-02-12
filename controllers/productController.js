const Products = require('../models/Product')


const getProductos = async (req, res ) =>{

    try {
        const products = await Products.findAll();
        res.json(products); 
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Error get products'})
        
    }
};


const createProducts = async (req, res) => {
    const {name , price , description} = req.body;


    try {
        await Products.create({name , price , description});
        res.status(200).json({sucess:'true'})
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: 'Error al crear el producto' });
    }
}


const getProductosId = async (req, res) => {

    try {
        const idProducto = req.params.id;
        const products = await Products.findAll({
            where :{
                id:idProducto
            }
        })
        res.json(products)
    } catch (error) {
        // console.log(error)
        res.status(500).json({ success: false, error: 'Error get products' });

    }
}

const updateProducts = async (req,res) => {
    
    const {name , price , description} = req.body;

    
    try {
        const idProducto = req.params.id;

        await Products.update({name:name, price:price, description:description},{
            where:{
                id:idProducto
            }
        });

        res.json({sucess:true});

    } catch (error) {

        //console.log(error);
        res.status(500).json({ success: false, error: 'Error update product' });
        
    }
}

const delectProduct = async (req, res) => {

    try {
        const idProducto = req.params.id;
        await Products.destroy({
            where:{
                id:idProducto
            }
        })
        res.json({sucess:true})
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: 'Error delete products' });

    }
}

module.exports={
    getProductos,
    createProducts,
    getProductosId,
    updateProducts,
    delectProduct,
}