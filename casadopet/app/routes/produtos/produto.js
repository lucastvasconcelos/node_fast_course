module.exports = (app) => {
    let listaProdutos = ((req,res,next) =>{
        let connection =  app.infra.connectionFactory()
        let produtosDAO = new app.infra.ProdutosDAO(connection)
        produtosDAO.lista((err,result)=>{
            if(err){
                return next(err)
            }
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

        //validacao
        let requisicao = req.body

        req.assert("nome","nome é obrigatorio").notEmpty();

        req.assert("valor","valor é float").isFloat();

        let erros = req.validationErrors()

        if (erros){
            res.format({
            html : () => res.status(400).render("produtos/form.ejs",{erros:erros}),
            json : () => res.status(400).json(erros)
            })
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
