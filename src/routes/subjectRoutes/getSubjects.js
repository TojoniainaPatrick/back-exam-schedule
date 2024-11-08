const { CourseUnit, Subject, Exam, Professor, Semester, Periode, AcademicYear } = require("../../database/sequelize")

module.exports = app => {
    app.get('/subject/list', async( req, res ) => {
        try {
            const subjects = await Subject.findAll({
                include: [
                    CourseUnit,
                    Exam,
                    Professor,
                    {
                        model: Semester,
                        include: [{
                            model: Periode,
                            include: [ AcademicYear ]
                        }]
                    }
                ]
            })

            res.status( 200 ).json({
                message: 'Liste des éléments constitutifs',
                data: subjects
            })
        } catch (error) {
            res.status( 500 ).json({
                message: error.message,
                data: error
            })
        }
    })
}