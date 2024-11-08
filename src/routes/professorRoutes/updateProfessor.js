const { where } = require("sequelize")
const { Professor } = require("../../database/sequelize")

module.exports = app => {
    app.put('/professor/update/:professorId', async( req, res ) => {
        try {
            const professorId = req.params.professorId

            await Professor.update(
                req.body,
                {
                    where: { professorId }
                }
            )

            res.status( 200 ).json({
                message: 'Modification effectuée avec succès!',
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