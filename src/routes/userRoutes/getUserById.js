const { User } = require("../../database/sequelize")

module.exports = app => {
    app.get('/user/id/:userId', async( req, res ) => {
        try {
            const userId = req.params.userId
            const user = await User.findByPk( userId )

            res.status( 200 ).json({
                message: `Utilisateur numéro ${ userId }`,
                data: user
            })
        } catch (error) {
            res.status( 500 ).json({
                message: error.message,
                data: error
            })
        }
    })
}