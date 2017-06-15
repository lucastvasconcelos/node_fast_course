let http = require("http")

const configuracao = {
    hostname : "localhost",
    port: 3000,
    path: '/produtos',
    method: 'post',
    headers : {
        'Accept' : 'application/json',
        'Content-type' :"application/json"
    }
}

let client = http.request(configuracao, (res) => {
    console.log(res.statusCode  + "//" + res.statusMessage)
    res.on('data',(body)=>{
        console.log("Corpo:" + body)
    })
})
let animal = {
    nome: "",
    tipoAnimal: "Tartaruguinha",
    idade: 2,
    valor: 10.20
}

client.end(JSON.stringify(animal))