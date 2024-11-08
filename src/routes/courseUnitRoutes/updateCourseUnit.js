const { where } = require("sequelize")
const { CourseUnit } = require("../../database/sequelize")

module.exports = app => {
    app.put('/course-unit/update/:courseUnitId', async( req, res ) => {
        try {
            const courseUnitId = req.params.courseUnitId

            await CourseUnit.update(
                req.body,
                {
                    where: { courseUnitId }
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