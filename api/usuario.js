function salvar(req, resp){
    resp.send('Usuario > salvar')
}

function obter(req, resp){
    resp.send('Usuario > obter')
}

module.exports = { salvar, obter }