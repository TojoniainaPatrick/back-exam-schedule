const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'mndptdirfianarantsoa@gmail.com',
        pass: 'lubawespksdnlgkm'
    }
})

module.exports = {
    transporter
} 