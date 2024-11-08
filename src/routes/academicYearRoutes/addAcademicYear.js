const { where } = require('sequelize')
const { periodes } = require('../../constant/periode')
const { AcademicYear, Periode, Semester } = require('../../database/sequelize')

module.exports = app => {
    app.post('/year/add', async( req, res ) => {
        try {
            
            await AcademicYear.update({ currentAcademicYear: false }, { where: { currentAcademicYear: true } })

            let newYear
            await AcademicYear.create( req.body )
            .then( async newAcademicYear =>{
                newYear = newAcademicYear
                Object.keys( periodes ).map( async periodeName => {
                    const newPeriode = await Periode.create({ periodeName, academicYearId: newAcademicYear.academicYearId })
                    periodes[periodeName].map( async semesterName => {
                        await Semester.create({ semesterName, periodeId: newPeriode.periodeId })
                    })
                })
            })

            res.status( 200 ).json({
                message: 'Année créée avec succès!',
                data: newYear
            })
        } catch (error) {
            res.status( 500 ).json({
                message: error.message,
                data: error
            })
        }
    })
}