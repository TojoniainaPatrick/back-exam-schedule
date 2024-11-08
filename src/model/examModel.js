module.exports = ( sequelize, DataTypes ) => {
    
    const Exam = sequelize.define(
        'Exam',
        {
            examId: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            examDate: DataTypes.DATE,
            examType: DataTypes.STRING,
            examDuration: DataTypes.INTEGER,
            examStartTime: DataTypes.STRING,
            examFinishTime: DataTypes.STRING,
            examSession: DataTypes.STRING,
            paperCollectionDate: DataTypes.DATE,
            paperReturnDate: DataTypes.DATE,
            published: DataTypes.BOOLEAN,
            publishingDate: DataTypes.DATE,
            confirmPublished: DataTypes.BOOLEAN,
            unSealed: DataTypes.BOOLEAN
        }
    )

    return Exam
}