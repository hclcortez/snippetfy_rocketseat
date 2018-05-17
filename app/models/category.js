const category = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    title: DataTypes.STRING,
  })

  Category.associate = (models) => {
    Category.hasMany(models.Snippet)
  }

  return Category
}

export default category
