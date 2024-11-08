module.exports = ( sequelize, DataTypes ) => {

    const Professor = sequelize.define(
        'Professor',
        {
            professorId: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            professorName: DataTypes.STRING,
            professorEmail: DataTypes.STRING,
            imageUrl: {
                type: DataTypes.TEXT,
                defaultValue: `${process.env.BASE_URL}uploads/defaultUserImage.png`
            },
        }
    )

    return Professor
}