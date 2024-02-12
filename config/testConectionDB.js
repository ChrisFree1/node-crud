const db = require('../config/db')

async function testConection() {
    try {
        await db.authenticate();
        console.log("Conection exit!")
    } catch (error) {
        console.log("Error the conection",error)
        
    }
}


module.exports={
    testConection,  
};