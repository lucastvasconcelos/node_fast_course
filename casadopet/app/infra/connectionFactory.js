const mysql = require("mysql")
criarConexaoDB = () => {
    return mysql.createConnection({
        host:"localhost",
        user:"lucas",
        password:"lucas",
        database: "casadopet"
    })
}

module.exports = () => {
    return criarConexaoDB
}