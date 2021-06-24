const express = require('express')
const app = express()
const bodyParser  = require('body-parser')

const usuarioApi = require('./api/usuario')
const saudacao = require('./saudacaoMid')
const produtoApi = require('./api/produto')
produtoApi(app, 'com param!')

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use(saudacao('Carol'))

app.use((req, resp, next) => {
    console.log('Antes...')
    next()
})

app.get('/clientes/relatorio', (req, resp) =>{
    resp.send(`Relatorio Cliente: completo = ${req.query.completo}, ano = ${req.query.ano}`)
})

app.post('/corpo', (req, resp) => {
    // let corpo = ''
    // req.on('data', function(parte) {
    //     corpo += parte
    // })

    // req.on('end', function(){
        // resp.send(corpo)
    // })
    resp.send(req.body)
})

app.get('/clientes/:id', (req, resp) => {
    resp.send(`Cliente ${req.params.id} selecionado!`)
})

app.get('/opa', (req, resp, next) => {
    console.log('Durante...')
    resp.json({
        data: [
            {id: 7, name: 'Marisha', position: 1},
            {id: 14, name: 'Ashley', position: 2},
            {id: 18, name:'Laura', position:3}
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })

    next()

    // resp.json({
    //     name: "Notebook",
    //     price: "2.852"
    // })

    // resp.send('Estou bem')
})

app.use('/opa', (req, resp) => {
    console.log('Depois...')
})

app.listen(3000, ()=>{
    console.log('Backend executando...')
})