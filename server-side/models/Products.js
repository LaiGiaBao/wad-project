module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define("Products", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    sizes: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    colors: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pictSource: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.BIGINT,
      allowNull: true,
    }
  });
  Products.associate = (models) => {
    Products.hasMany(models.Comments, {
      onDelete: "cascade",
    });
  };
  return Products;
};
