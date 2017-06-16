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
    exclui(nome,callback){
      this._connection.query("delete from animal where nome = ?",nome,callback)
    }
}

module.exports = () => {
    return ProdutosDAO;
}
