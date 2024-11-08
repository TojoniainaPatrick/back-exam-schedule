const { where } = require('sequelize')
const { User } = require('../../database/sequelize')

module.exports = app => {
    app.delete('/user/delete/:userId', async( req, res ) => {
        try {
            const userId = req.params.userId

            await User.destroy({ where: { userId } })

            res.status( 200 ).json({
                message: 'Suppresion effectuée avec succès!',
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