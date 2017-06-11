let app = require("./config/express")()
let rotaIndex = require('./app/routes/index')(app)
let rotaProduto = require("./app/routes/produtos")(app)
//permitindo agora subir o servidor
app.listen(3000,()=>{
    console.log("on")
    })