const { User } = require('../../database/sequelize')

module.exports = app => {
    app.post('/user/add', async( req, res ) => {
        try {

            const newUser = await User.create( req.body )

            res.status( 200 ).json({
                message: 'Nouvel utilisateur créé avec succès!',
                data: newUser
            })
            
        } catch (error) {
            res.status( 500 ).json({
                message: error.message,
                data: error
            })
        }
    })
}