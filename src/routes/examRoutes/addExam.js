const { Exam } = require('../../database/sequelize')

module.exports = app => {
    app.post('/exam/add', async( req, res ) => {
        try {

            const newExam = await Exam.create( req.body )

            res.status( 200 ).json({
                message: 'Exam créé avec succès!',
                data: newExam
            })
        } catch (error) {
            res.status( 500 ).json({
                message: error.message,
                data: error
            })
        }
    })
}