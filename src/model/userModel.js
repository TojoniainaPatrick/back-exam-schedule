const bcrypt = require('bcrypt')

module.exports = ( sequelize, DataTypes ) => {

    const User = sequelize.define(
        'User',
        {
            userId: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            userName: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
                validate: {
                    notNull: { msg: 'Le nom d\'utilisateur est une propriété requise' },
                    notEmpty: { msg: 'Le nom d\'utilisateur ne peut pas être vide' }
                }
            },
            userEmail: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
                validate: {
                    notNull: { msg: 'L\'adresse mail est une propriété requise' },
                    notEmpty: { msg: 'L\'adresse mail ne peut pas être vide' },
                    isEmail: { msg: 'Merci de saisir une adresse mail valide' }
                }
            },
            userPassword: {
                type: DataTypes.STRING,
                allowNull: false,
                set( value ){
                    this.setDataValue( 'userPassword', bcrypt.hashSync(value, 10) )
                },
                validate: {
                    notNull: { msg: ' Le mot de passe est une propriété requise.'},
                    notEmpty: { msg: ' Le mot de passe ne peut pas être vide.'}
                }
            },
            userImageUrl: {
                type: DataTypes.TEXT,
                defaultValue: `${process.env.BASE_URL}uploads/defaultUserImage.png`
            },
            userStatus: {
                type: DataTypes.STRING,
                defaultValue: 'enabled'
            },
            userRole: {
                type: DataTypes.STRING
            }
        }
    )

    return User
}