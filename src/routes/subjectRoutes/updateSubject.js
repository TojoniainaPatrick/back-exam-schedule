const { where } = require("sequelize")
const { Subject } = require("../../database/sequelize")

module.exports = app => {
    app.put('/subject/update/:subjectId', async( req, res ) => {
        try {
            const subjectId = req.params.subjectId

            await Subject.update(
                req.body,
                {
                    where: { subjectId }
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