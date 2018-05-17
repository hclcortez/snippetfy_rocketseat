const snippet = (sequelize, DataTypes) => {
  const Snippet = sequelize.define('Snippet', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
  })

  Snippet.associete = (models) => {
    Snippet.belongsTo(models.Category)
  }

  return Snippet
}

export default snippet
