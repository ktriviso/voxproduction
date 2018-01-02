require('dotenv').load()

const express = require('express')
const nodemailer = require('nodemailer')
const path = require('path')
const bodyparser = require('body-parser')
const app = express()



const emailConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    user: 'krista.triviso91@gmail.com',
    password: process.env.EMAIL_PASSWORD
}

const transporter = nodemailer.createTransport({
    host: emailConfig.host,
    port: emailConfig.port,
    secure: emailConfig.secure,
    auth: {
        user: emailConfig.user,
        pass: emailConfig.password
    }
})

app.set('port', (process.env.PORT || 3001))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended: true
}))

app.use(function(request, response, next){
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Cache-Control', 'no-cache')
    next()
})

app.use(express.static(path.resolve(__dirname, '../client/build')))
app.get('*', function(request, response){
    response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})
app.post('/sendEmail', function(request, response){
    const data = request.body.data

    console.log(data)

    const emailInfo = {
        from: data.email,
        to: emailConfig.user,
        subject: 'You have a new email from ' + data.name + ' through your website',
        text: `${data.message}, ${data.number}`,
        html: `${data.message}, Contact Number: ${data.number}`
    }
    let responseStatus
    transporter.sendMail(emailInfo, function(error, info){
        if(error){
            responseStatus: false
        } else {
            responseStatus: true
        }
    })
    return response.json({
        success: responseStatus
    })
})

app.listen(app.get('port'), function(){
    console.log('server running on: ' + app.get('port'))
})

module.exports= app
