const { where } = require("sequelize")
const { AcademicYear } = require("../../database/sequelize")

module.exports = app => {
    app.put('/year/update/:academicYearId', async( req, res ) => {
        try {
            const academicYearId = req.params.academicYearId

            await AcademicYear.update(
                req.body,
                {
                    where: { academicYearId }
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