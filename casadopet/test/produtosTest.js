const express = require("../config/express")()
const request = require("supertest")(express)
describe('#ProdutosController',() => {

    afterEach((done)=> {
        var conn = express.infra.connectionFactory()
        conn.query("delete from animal",(ex,result)=>{
            if(!ex){
                done();
            }
        })
    })

    it('#listagemjson',(done)=>{
        request.get('/produtos')
        .set("Accept","application/json")
        .expect('Content-type',/json/)
        .expect(200,done)
    })

    it("#adicionando usuario invalido",(done) => {
            request.post('/produtos')
            .send({nome: "",tipoAnimal: "tartaruga",idade: 10,valor: ""})
            .expect(400,done)
        })

    it("#adicionando usuario valido",(done) => {
        request.post("/produtos")
        .send({nome: "Adalberto",tipoAnimal : "Camelo",idade: 1,valor: 100.20})
        .expect(302,done)
    })
})
