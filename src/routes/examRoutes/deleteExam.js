const { where } = require('sequelize')
const { Exam } = require('../../database/sequelize')

module.exports = app => {
    app.delete('/exam/delete/:examId', async( req, res ) => {
        try {
            const examId = req.params.examId

            await Exam.destroy({ where: { examId } })

            res.status( 200 ).json({
                message: 'Suppresion effectuée avec succès!',
                data: null
            })
        } catch (error) {
            res.status( 500 ).json({
                message: error.message,
                data: error
            })
        } 
    })
}