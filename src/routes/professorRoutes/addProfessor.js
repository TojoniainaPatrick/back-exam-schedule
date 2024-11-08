const { Professor } = require('../../database/sequelize')

module.exports = app => {
    app.post('/professor/add', async( req, res ) => {
        try {

            const newProfessor = await Professor.create( req.body )

            res.status( 200 ).json({
                message: 'Enseignant créé avec succès!',
                data: newProfessor
            })
        } catch (error) {
            res.status( 500 ).json({
                message: error.message,
                data: error
            })
        }
    })
}