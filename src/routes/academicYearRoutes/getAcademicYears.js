const { AcademicYear, Periode, Semester } = require("../../database/sequelize")

module.exports = app => {
    app.get('/year/list', async( req, res ) => {
        try {
            const academicYears = await AcademicYear.findAll({
                include: [{
                    model: Periode,
                    include: [{ model: Semester }]
                }]
            })

            res.status( 200 ).json({
                message: 'Liste des années universitaires',
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