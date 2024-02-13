const { getDbClient } = require('../config/db')


module.exports = class ProductosService {

    getProductos = async() => {

        let connect = null
        
        try {
            connect = await getDbClient();

            const res = await connect.query(`SELECT * FROM products;`)
            if (res.rows<=0){
                console.log('no hay datos')
            }
            return[200,res]
        } catch (error) {
            console.log(error)
            return [500,error.message]
            
        }finally{
            connect?.release(true)
        }

    }

    createProducts = async (data) => {
        let connect = null

        try {

            const { precio, descripcion  } = data

            connect = await getDbClient();

            const insertProducts = `
                INSERT INTO public.products (
                    precio,
                    descripcion
                )
                VALUES
                (
                    $1,
                    $2
                )
            
            `
            const resultQuery = await connect.query(insertProducts,[precio,descripcion])

            return [201, 'Producto creado con exito' ]

        } catch (error) {

            return [500,error.message]
            
        }finally{
            connect?.release(true)
        }
    }

}