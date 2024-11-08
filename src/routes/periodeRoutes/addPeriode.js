const { Periode } = require('../../database/sequelize')

module.exports = app => {
    app.post('/periode/add', async( req, res ) => {
        try {

            const newPeriode = await Periode.create( req.body )

            res.status( 200 ).json({
                message: 'Période créée avec succès!',
                data: newPeriode
            })
        } catch (error) {
            res.status( 500 ).json({
                message: error.message,
                data: error
            })
        }
    })
}