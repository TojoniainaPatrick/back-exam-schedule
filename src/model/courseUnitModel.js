module.exports = ( sequelize, DataTypes ) => {

    const CourseUnit = sequelize.define(
        'CourseUnit',
        {
            courseUnitId: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            courseUnitName: DataTypes.STRING,
        }
    )

    return CourseUnit
}