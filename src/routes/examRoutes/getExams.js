const { AcademicYear, Periode, Semester, Exam, Subject, Professor, CourseUnit } = require("../../database/sequelize")

module.exports = app => {
    app.get('/exam/list', async( req, res ) => {
        try {
            const exams = await Exam.findAll({
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
            })

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