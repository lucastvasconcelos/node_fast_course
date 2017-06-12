const mysql = require("mysql")
criarConexaoDB = () => {
    return mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database: "casadopet"
    })
}

module.exports = () => {
    return criarConexaoDB
}