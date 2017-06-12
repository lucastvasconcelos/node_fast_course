class ProdutosDAO{
    constructor(_connection){
        this._connection = _connection
    }
    lista(callback){
        this._connection.query("select * from animal",callback)
    }
    salva(requisicao,callback){
        this._connection.query("insert into animal set ?",requisicao,callback)
    }
}

module.exports = () => {
    return ProdutosDAO;
}