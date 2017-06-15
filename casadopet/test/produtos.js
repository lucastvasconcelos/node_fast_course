const http = require("http")
const assert = require("assert")
describe('#ProdutosController',() => {
    it('#listagemjson',(done)=>{
        var config ={ 
            hostname : "localhost",
            port: 3000,
            path: '/produtos',
            headers : {
                'Accept' : 'application/json',
            }
        }

        http.get(config,(res) => {
            console.log(res.statusCode)
            assert.equal(res.statusCode,200)            
            assert.equal(res.headers['content-type'], 'application/json; charset=utf-8')
            done()      
        })
    })
})