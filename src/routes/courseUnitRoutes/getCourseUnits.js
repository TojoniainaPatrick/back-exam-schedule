const { CourseUnit, Subject } = require("../../database/sequelize")

module.exports = app => {
    app.get('/course-unit/list', async( req, res ) => {
        try {
            const courseUnits = await CourseUnit.findAll({
                include: [{
                    model: Subject
                }]
            })

            res.status( 200 ).json({
                message: 'Liste des unités d\'enseigement',
                data: courseUnits
            })
        } catch (error) {
            res.status( 500 ).json({
                message: error.message,
                data: error
            })
        }
    })
}