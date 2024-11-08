const { Subject } = require('../../database/sequelize')

module.exports = app => {
    app.post('/subject/add', async( req, res ) => {
        try {

            const nezSubject = await Subject.create( req.body )

            res.status( 200 ).json({
                message: 'Elément constitutif créé avec succès!',
                data: nezSubject
            })
        } catch (error) {
            res.status( 500 ).json({
                message: error.message,
                data: error
            })
        }
    })
}