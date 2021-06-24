function saudacao(nome){
    return function (req, resp, next){
        console.log(`Hello ${nome}!`)
        next()
    }
}

module.exports = saudacao