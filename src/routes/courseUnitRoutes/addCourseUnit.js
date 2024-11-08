const { CourseUnit } = require('../../database/sequelize')

module.exports = app => {
    app.post('/course-unit/add', async( req, res ) => {
        try {

            const newCourseUnit = await CourseUnit.create( req.body )

            res.status( 200 ).json({
                message: 'Unité d\'enseignement créée avec succès!',
                data: newCourseUnit
            })
        } catch (error) {
            res.status( 500 ).json({
                message: error.message,
                data: error
            })
        }
    })
}