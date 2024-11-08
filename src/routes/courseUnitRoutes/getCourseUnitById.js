const { CourseUnit, Subject } = require("../../database/sequelize")

module.exports = app => {
    app.get('/course-unit/id/:courseUnitId', async( req, res ) => {
        try {
            const courseUnitId = req.params.courseUnitId
            const courseUnit = await CourseUnit.findByPk(
                courseUnitId,
                {
                    include: [{
                        model: Subject
                    }]
                }
            )

            res.status( 200 ).json({
                message: `Unité d\'enseigement numéro ${ courseUnitId }`,
                data: courseUnit
            })
        } catch (error) {
            res.status( 500 ).json({
                message: error.message,
                data: error
            })
        }
    })
}