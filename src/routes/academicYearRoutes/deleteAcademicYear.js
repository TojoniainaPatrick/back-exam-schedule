const { where } = require('sequelize')
const { AcademicYear } = require('../../database/sequelize')

module.exports = app => {
    app.delete('/year/delete/:academicYearId', async( req, res ) => {
        try {
            const academicYearId = req.params.academicYearId

            await AcademicYear.destroy({ where: { academicYearId } })

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