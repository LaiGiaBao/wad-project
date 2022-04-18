module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define("Categories", {
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Categories.associate = (models) => {
    Categories.hasMany(models.Products, {
      onDelete: "cascade",
    });
  };
  return Categories;
};
