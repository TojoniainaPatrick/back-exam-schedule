const { where } = require("sequelize")
const { Exam } = require("../../database/sequelize")

module.exports = app => {
    app.put('/exam/update/:examId', async( req, res ) => {
        try {
            const examId = req.params.examId

            await Exam.update(
                req.body,
                {
                    where: { examId }
                }
            )

            res.status( 200 ).json({
                message: 'Modification effectuée avec succès!',
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