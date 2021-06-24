module.exports = (app, text) => {
    function salvar(req, resp) {
        resp.send('Produto > salvar > ' + text)
    }

    function obter(req, resp) {
        resp.send('Produto > obter > ' + text)
    }

    app.post('/produto', salvar)
    app.get('/produto', obter)

    return { salvar, obter }
}