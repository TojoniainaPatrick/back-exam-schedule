const { AcademicYear, Periode, Semester, Exam, Subject, Professor, CourseUnit } = require("../../database/sequelize")

module.exports = app => {
    app.get('/exam/id/:examId', async( req, res ) => {
        try {
            const examId = req.params.examId
            const exams = await Semester.findByPk(
                examId,
                {
                    include: [{
                        model: Subject,
                        include: [
                            Professor,
                            CourseUnit,
                            Exam,
                            {
                                model: Periode,
                                include: [ AcademicYear ]
                            }
                        ]
                    }]
                }
            )

            res.status( 200 ).json({
                message: 'Liste des examens',
                data: exams
            })
        } catch (error) {
            res.status( 500 ).json({
                message: error.message,
                data: error
            })
        }
    })
}