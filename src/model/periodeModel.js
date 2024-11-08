module.exports = ( sequelize, DataTypes ) => {

    const Periode = sequelize.define(
        'Periode',
        {
            periodeId: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            periodeName: DataTypes.STRING,
        }
    )

    return Periode
}