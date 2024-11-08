const { Professor, Subject, Exam } = require('../../database/sequelize')

module.exports = app => {
    app.get('/professor/list', async ( req, res ) => {
        try {

            const professors = await Professor.findAll({
                include: [{
                    model: Subject,
                    include: [{
                        model: Exam
                    }]
                }]
            })

            res.status( 200 ).json({
                message: 'Liste des enseignants',
                data: professors
            })

        } catch (error) {
            res.status( 500 ).json({
                message: error.message,
                date: error
            })
        }
    })
}