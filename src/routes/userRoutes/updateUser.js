const { where } = require("sequelize")
const { User } = require("../../database/sequelize")

module.exports = app => {
    app.put('/user/update/:userId', async( req, res ) => {
        try {
            const userId = req.params.userId

            await User.update(
                req.body,
                {
                    where: { userId }
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