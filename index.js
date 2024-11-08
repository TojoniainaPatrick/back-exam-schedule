require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { runApp } = require('./src/database/sequelize')

const app = express() 

app
    .use(cors())
    .use(express.urlencoded({extended : true}))
    .use(express.json({extended: true}))
    .use('/uploads', express.static('uploads'))

// user routes
require('./src/routes/userRoutes/addUser')(app)
require('./src/routes/userRoutes/authenticate')(app)
require('./src/routes/userRoutes/deleteUser')(app)
require('./src/routes/userRoutes/getUserById')(app)
require('./src/routes/userRoutes/getUsers')(app)
require('./src/routes/userRoutes/updateUser')(app)

// academique year routes
require('./src/routes/academicYearRoutes/addAcademicYear')(app)
require('./src/routes/academicYearRoutes/deleteAcademicYear')(app)
require('./src/routes/academicYearRoutes/getAcademicYearById')(app)
require('./src/routes/academicYearRoutes/getAcademicYears')(app)
require('./src/routes/academicYearRoutes/getCurrentYear')(app)
require('./src/routes/academicYearRoutes/updateAcademicYear')(app)

// periode routes
require('./src/routes/periodeRoutes/addPeriode')(app)
require('./src/routes/periodeRoutes/deletePeriode')(app)
require('./src/routes/periodeRoutes/getPeriodeById')(app)
require('./src/routes/periodeRoutes/getPeriodes')(app)
require('./src/routes/periodeRoutes/updatePeriode')(app)

// course unit routes
require('./src/routes/courseUnitRoutes/addCourseUnit')(app)
require('./src/routes/courseUnitRoutes/deleteCourseUnit')(app)
require('./src/routes/courseUnitRoutes/getCourseUnitById')(app)
require('./src/routes/courseUnitRoutes/getCourseUnits')(app)
require('./src/routes/courseUnitRoutes/updateCourseUnit')(app)

// professor routes
require('./src/routes/professorRoutes/addProfessor')(app)
require('./src/routes/professorRoutes/deleteProfessor')(app)
require('./src/routes/professorRoutes/getProfessorById')(app)
require('./src/routes/professorRoutes/getProfessors')(app)
require('./src/routes/professorRoutes/updateProfessor')(app)

// semester routes
require('./src/routes/semesterRoutes/deleteSemester')(app)
require('./src/routes/semesterRoutes/getSemesterId')(app)
require('./src/routes/semesterRoutes/getSemesters')(app)
require('./src/routes/semesterRoutes/updateSemester')(app)

// subject routes
require('./src/routes/subjectRoutes/addSubject')(app)
require('./src/routes/subjectRoutes/deleteSubject')(app)
require('./src/routes/subjectRoutes/getSubjectById')(app)
require('./src/routes/subjectRoutes/getSubjects')(app)
require('./src/routes/subjectRoutes/updateSubject')(app)

// exam routes
require('./src/routes/examRoutes/addExam')(app)
require('./src/routes/examRoutes/deleteExam')(app)
require('./src/routes/examRoutes/getExamById')(app)
require('./src/routes/examRoutes/getExams')(app)
require('./src/routes/examRoutes/updateExam')(app)

// resource not found error handler
app.use(({res}) => {
    const message = `Impossible de trouver la ressource demandée! Vous pouvez essayer une autre URL. `
    res.status(404).json({message})
})


runApp( app )