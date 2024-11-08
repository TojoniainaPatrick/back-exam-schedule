const { DataTypes, Sequelize, where } = require('sequelize')
const academicYearModel = require('../model/academicYearModel')
const courseUnitModel = require('../model/courseUnitModel')
const examModel = require('../model/examModel')
const periodeModel = require('../model/periodeModel')
const professorModel = require('../model/professorModel')
const semesterModel = require('../model/semesterModel')
const subjectModel = require('../model/subjectModel')
const userModel = require('../model/userModel')


const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER_NAME,
    process.env.DATABASE_USER_PASSWORD,
    {
        host: process.env.DATABASE_HOST,
        dialect: process.env.DATABASE_DIALECT,
        logging: false,
        define: { freezeTableName: true }
    }
)

const AcademicYear = academicYearModel( sequelize, DataTypes )
const CourseUnit = courseUnitModel( sequelize, DataTypes )
const Exam = examModel( sequelize, DataTypes )
const Periode = periodeModel( sequelize, DataTypes )
const Professor = professorModel( sequelize, DataTypes )
const Semester = semesterModel( sequelize, DataTypes )
const Subject = subjectModel( sequelize, DataTypes )
const User = userModel( sequelize, DataTypes )

AcademicYear.hasMany( Periode, { foreignKey: 'academicYearId'})

CourseUnit.hasMany( Subject, { foreignKey: 'courseUnitId' })

Exam.belongsTo( Subject, { foreignKey: 'subjectId' })

Periode.hasMany( Semester, { foreignKey: 'periodeId' })
Periode.belongsTo( AcademicYear, { foreignKey: 'academicYearId' })

Professor.hasMany( Subject, { foreignKey: 'professorId' })

Semester.hasMany( Subject, { foreignKey: 'semesterId' })
Semester.belongsTo( Periode, { foreignKey: 'periodeId' })

Subject.hasMany( Exam, { foreignKey: 'subjectId' })
Subject.belongsTo( CourseUnit, { foreignKey: 'courseUnitId' })
Subject.belongsTo( Professor, { foreignKey: 'professorId' })
Subject.belongsTo( Semester, { foreignKey: 'semesterId' })

const runApp = async  app => {
    
    // await sequelize.sync({ alter: true })
    // await sequelize.sync({ force: true })
    await sequelize.sync()
    .then( async _=> {
        
        await User.findOrCreate({
            where: { userEmail: 'admin@gmail.com'},
            defaults: {
                userEmail: 'admin@gmail.com',
                userName: 'admin',
                userPassword: 'admin',
                userStatus: 'enabled',
                userRole: 'rm'
            }
        });
    })
    .then( _=> {
        app.listen( process.env.PORT, _ => console.log('app is running on ', process.env.BASE_URL))
    })
    .catch( error => {
        console.log( error )
    })
}


module.exports = {
    runApp,
    AcademicYear,
    CourseUnit,
    Exam,
    Periode,
    Professor,
    Semester,
    Subject,
    User
}