module.exports = (app) => {
    app.get("/",(req,res) => {
    	let connection = app.infra.connectionFactory()
    	let produtosDAO = new app.infra.ProdutosDAO(connection)
    	produtosDAO.lista((err,results) => {
    		res.render('index.ejs',{livros:results})
    	})
})}