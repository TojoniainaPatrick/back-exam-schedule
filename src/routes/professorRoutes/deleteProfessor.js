const { where } = require('sequelize')
const { Professor } = require('../../database/sequelize')

module.exports = app => {
    app.delete('/professor/delete/:professorId', async( req, res ) => {
        try {
            const professorId = req.params.professorId

            await Professor.destroy({ where: { professorId } })

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