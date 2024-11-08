module.exports = ( sequelize, DataTypes ) => {

    const Semester = sequelize.define(
        'Semester',
        {
            semesterId: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            semesterName: DataTypes.STRING,
        }
    )

    return Semester
}