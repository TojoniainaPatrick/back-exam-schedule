const { CourseUnit, Subject, Exam, Professor, Semester, Periode, AcademicYear } = require("../../database/sequelize")

module.exports = app => {
    app.get('/subject/id/:subjectId', async( req, res ) => {
        try {
            const subjectId = req.params.subjectId
            const subjects = await Subject.findByPk(
                subjectId,
                {
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
                }
            )

            res.status( 200 ).json({
                message: `Elément constitutif numéro ${ subjectId }`,
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