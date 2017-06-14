module.exports = (app) => {
    let listaProdutos = ((req,res) =>{
        let connection =  app.infra.connectionFactory()
        let produtosDAO = new app.infra.ProdutosDAO(connection)
        produtosDAO.lista((err,result)=>{
            res.format({
                html: () => {
                    res.render("produtos/lista.ejs",{lista:result}
                )},
                json: () => {
                    res.json(result)
                }
            })
        })
        connection.end()
    })  

    app.get("/produtos",listaProdutos)

    app.get("/produtos/form",(req,res)=>{
        res.render("produtos/form.ejs",{erros:[]})
    })

    app.post("/produtos",(req,res)=>{
        let requisicao = req.body
        req.assert("nome","nome é obrigatorio").notEmpty();
        req.assert("valor","valor é float").isFloat();
        let erros = req.validationErrors()
        console.log(erros)
        if (erros){
            res.render("produtos/form.ejs",{erros:erros})
            return;
        } 

        //controller post
        let connection =  app.infra.connectionFactory()
        let produtosDAO = new app.infra.ProdutosDAO(connection)
        produtosDAO.salva(requisicao,(err,result)=>{
            res.redirect("/produtos")
        })
    })   
}