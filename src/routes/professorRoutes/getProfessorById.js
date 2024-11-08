const { Professor, Subject, Exam } = require('../../database/sequelize')

module.exports = app => {
    app.get('/professor/id/:professorId', async ( req, res ) => {
        try {

            const professorId = req.params.professorId
            const professor = await Professor.findByPk(
                professorId,
                {
                    include: [{
                        model: Subject,
                        include: [{
                            model: Exam
                        }]
                    }]
                }
            )

            res.status( 200 ).json({
                message: `Enseignant numéro ${ professorId }`,
                data: professor
            })

        } catch (error) {
            res.status( 500 ).json({
                message: error.message,
                date: error
            })
        }
    })
}