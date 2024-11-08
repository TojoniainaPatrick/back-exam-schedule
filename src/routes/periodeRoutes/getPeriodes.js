const { Periode, Semester, Subject } = require("../../database/sequelize")

module.exports = app => {
    app.get('/periode/list', async( req, res ) => {
        try {
            const periodes = await Periode.findAll({
                include: [{
                    model: Semester,
                    include: [{
                        model: Subject
                    }]
                }]
            })

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