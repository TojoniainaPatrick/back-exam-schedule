const { where } = require('sequelize')
const { Subject } = require('../../database/sequelize')

module.exports = app => {
    app.delete('/subject/delete/:subjectId', async( req, res ) => {
        try {
            const subjectId = req.params.subjectId

            await Subject.destroy({ where: { subjectId } })

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