function getEnv () {
    return process.env.NODE_ENV || 'development'   
}


function isProd() {
    return getEnv === 'production'
}


module.exports={
    getEnv,
    isProd,
}
