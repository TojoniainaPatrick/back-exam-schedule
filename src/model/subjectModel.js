module.exports = ( sequelize, DataTypes ) => {

    const Subject = sequelize.define(
        'Subject',
        {
            subjectId: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            subjectName: DataTypes.STRING,
            studyTrack: {
                type: DataTypes.STRING,
                get(){
                    return this.getDataValue('studyTrack').split(",")
                },
                set(studyTrack){
                    this.setDataValue('studyTrack', studyTrack.join())
                }
            },
            postponed: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            }
        }
    )

    return Subject
}