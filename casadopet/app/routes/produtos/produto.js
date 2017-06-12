module.exports = (app) => {
    app.get("/produtos",(req,res)=>{
        let connection =  app.infra.connectionFactory()
        let produtosDAO = new app.infra.ProdutosDAO(connection)
        produtosDAO.lista((err,result)=>{
            res.render("produtos/lista.ejs",{lista:result})            
        })
        connection.end()
    })
    app.get("/produtos/form",(req,res)=>{
        res.render("produtos/form.ejs")
    })

    app.post("/produtos/salvar",(req,res)=>{
        let requisicao = req.body
        console.log(requisicao)
        let connection =  app.infra.connectionFactory()
        let produtosDAO = new app.infra.ProdutosDAO(connection)
        produtosDAO.salva(requisicao,(err,result)=>{
            res.render("produtos/lista.ejs")
        })
    })   
}