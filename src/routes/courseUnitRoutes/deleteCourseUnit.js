const { where } = require('sequelize')
const { CourseUnit } = require('../../database/sequelize')

module.exports = app => {
    app.delete('/course-unit/delete/:courseUnitId', async( req, res ) => {
        try {
            const courseUnitId = req.params.courseUnitId

            await CourseUnit.destroy({ where: { courseUnitId } })

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