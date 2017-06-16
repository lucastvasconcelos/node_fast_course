const mysql = require("mysql")
criarConexaoDB = () => {
    	if(!process.env.NODE_ENV){
	        return mysql.createConnection({
   	        host:"localhost",
	        user:"root",
	        password:"lucas",
	        database: "casadopet"
    		})
		}
    	if(process.env.NODE_ENV="test"){
			return mysql.createConnection({
        	host:"localhost",
	        user:"root",
	        password:"lucas",
	        database: "casadopet_test"
    		})
    	}
    }

module.exports = () => {
    return criarConexaoDB
	}