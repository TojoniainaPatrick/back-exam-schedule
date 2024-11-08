const { where } = require("sequelize")
const { Semester } = require("../../database/sequelize")

module.exports = app => {
    app.put('/semester/update/:semesterId', async( req, res ) => {
        try {
            const semesterId = req.params.semesterId

            await Semester.update(
                req.body,
                {
                    where: { semesterId }
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