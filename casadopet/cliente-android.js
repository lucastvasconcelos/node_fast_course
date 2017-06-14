let http = require("http")

const configuracao = {
    hostname : "localhost",
    port: 3000,
    path: '/produtos',
    headers : {
        'Accept' : 'application/json'
    }
}

http.get(configuracao, (res) => {
    console.log(res.statusCode  + "//" + res.statusMessage)
    res.on('data',(body)=>{
        console.log("Corpo:" + body)
    })
})