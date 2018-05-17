const category = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    title: DataTypes.STRING,
  })

  Category.associete = (models) => {
    Category.belongsTo(models.User)
    Category.hasMany(models.Snippet)
  }

  return Category
}

export default category
