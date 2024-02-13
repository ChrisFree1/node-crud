module.exports= class ProductosController{

    constructor(service){
        this.service = service
    }

    getProductos= async (req,res) => {


        try {

            const reqData = req.body
            console.log("dad")
            const [status,data] = await this.service.getProductos(reqData)

            res.status(status).json(data)
        } catch (error) {
            res.status(500).json({
                message: 'Hubo un error al procesar la solicitud',
                error: [error.message]
            })
            
        }

    }

    createProducts = async (req,res) => {

        try {
            const reqData = req.body
            const [status, message] = await this.service.createProducts(reqData)

            res.status(status).json(message)
        } catch (error) {
            res.status(500).json({
                message: 'Hubo un error al procesar la solicitud',
                error: [error.message]
            })
            
        }
    }
}