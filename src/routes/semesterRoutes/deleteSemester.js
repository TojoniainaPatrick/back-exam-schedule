const { where } = require('sequelize')
const { Semester } = require('../../database/sequelize')

module.exports = app => {
    app.delete('/semester/delete/:semesterId', async( req, res ) => {
        try {
            const semesterId = req.params.semesterId

            await Semester.destroy({ where: { semesterId } })

            res.status( 200 ).json({
                message: 'Suppresion effectuée avec succès!',
                data: null
            })
        } catch (error) {
            res.status( 500 ).json({
                message: error.message,
                data: error
            })
        } 
    })
}