const { where } = require("sequelize")
const { Periode } = require("../../database/sequelize")

module.exports = app => {
    app.put('/periode/update/:periodeId', async( req, res ) => {
        try {
            const periodeId = req.params.periodeId

            await Periode.update(
                req.body,
                {
                    where: { periodeId }
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