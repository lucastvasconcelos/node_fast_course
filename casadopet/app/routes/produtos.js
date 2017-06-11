//module.exports é o padrão que o nodejs usa para exportar modulos
//portanto se vc precisa passar exportar uma função é necessario usa-lo
module.exports = (app) => {
    app.get('/produtos',(req,res)=> {
            console.log("atendendo a requisição")
            res.render('produto/lista')
        })
}