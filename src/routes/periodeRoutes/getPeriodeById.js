const { Periode, Semester, Subject } = require("../../database/sequelize")

module.exports = app => {
    app.get('/periode/id/:periodeId', async( req, res ) => {
        try {
            const periodeId = req.params.periodeId
            const periodes = await Periode.findByPk(
                periodeId,
                {
                    include: [{
                        model: Semester,
                        include: [{
                            model: Subject
                        }]
                    }]
                }
            )

            res.status( 200 ).json({
                message: 'Liste des périodes',
                data: periodes
            })
        } catch (error) {
            res.status( 500 ).json({
                message: error.message,
                data: error
            })
        }
    })
}