const { Periode } = require('../../database/sequelize')

module.exports = app => {
    app.delete('/periode/delete/:periodeId', async ( req, res ) => {
        try {

            const periodeId = req.params.periodeId
            await Periode.destroy({
                where: { periodeId }
            })

            res.status( 200 ).json({
                message: 'Suppression effectuée avec succès',
                data: null
            })

        } catch (error) {
            res.status( 500 ).json({
                message: 'Suppression effectuée avec succès',
                data: null
            })
        }
    })
}