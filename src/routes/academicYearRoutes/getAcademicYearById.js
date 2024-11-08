const { AcademicYear, Periode, Semester } = require("../../database/sequelize")

module.exports = app => {
    app.get('/year/id/:academicYearId', async( req, res ) => {
        try {
            const academicYearId = req.params.academicYearId
            const academicYears = await AcademicYear.findByPk(
                academicYearId,
                {
                    include: [{
                        model: Periode,
                        include: [{ model: Semester }]
                    }]
                }
            )

            res.status( 200 ).json({
                message: `Année universitaire numéro ${ academicYearId }`,
                data: academicYears
            })
        } catch (error) {
            res.status( 500 ).json({
                message: error.message,
                data: error
            })
        }
    })
}