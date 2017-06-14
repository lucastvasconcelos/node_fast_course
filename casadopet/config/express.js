const express = require('express')
const load = require("express-load")
const bodyparser = require("body-parser")
const validator = require("express-validator")
module.exports = () => {
    let app = express()

    app.set("view engine","ejs")
    app.set("views","./app/views")

    app.use(bodyparser.urlencoded({extended:true}))
    app.use(bodyparser.json())
    app.use(validator())

    load('routes',{cwd:'app'})
        .then('infra')
        .into(app)
    return app
}