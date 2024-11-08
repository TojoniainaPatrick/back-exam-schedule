const { AcademicYear, Periode, Semester } = require("../../database/sequelize")

module.exports = app => {
    app.get('/year/current', async( req, res ) => {
        try {
            const academicYear = await AcademicYear.findOne({
                    include: [{
                        model: Periode,
                        include: [{ model: Semester }]
                    }]
                },
                { where: { currentAcademicYear: true }}
            )

            res.status( 200 ).json({
                message: `Année universitaire courante`,
                data: academicYear
            })
        } catch (error) {
            res.status( 500 ).json({
                message: error.message,
                data: error
            })
        }
    })
}