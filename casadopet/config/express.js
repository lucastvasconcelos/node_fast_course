const express = require('express')
const load = require("express-load")
const bodyparser = require("body-parser")
module.exports = () => {
    let app = express()

    app.set("view engine","ejs")
    app.set("views","./app/views")

    app.use(bodyparser.urlencoded({extended:true}))

    load('routes',{cwd:'app'})
        .then('infra')
        .into(app)
    return app
}