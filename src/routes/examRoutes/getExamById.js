const { AcademicYear, Periode, Semester, Exam, Subject, Professor, CourseUnit } = require("../../database/sequelize")

module.exports = app => {
    app.get('/exam/id/:examId', async( req, res ) => {
        try {
            const examId = req.params.examId
            const exams = await Exam.findByPk(
                examId,
                {
                    include: [{
                        model: Subject,
                        include: [
                            Professor,
                            CourseUnit,
                            {
                                model: Semester,
                                include: [{
                                    model: Periode,
                                    include: [ AcademicYear ]
                                }]
                            }
                        ]
                    }]
                }
            )

            res.status( 200 ).json({
                message: `Examen numéro ${ examId }`,
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