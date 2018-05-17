const user = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  })

  User.associete = (models) => {
    User.hasMany(models.Category)
  }

  return User
}

export default user
