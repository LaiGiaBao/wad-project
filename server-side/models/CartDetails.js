module.exports = (sequelize, DataTypes) => {
  const CartDetails = sequelize.define("CartDetails", {
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  CartDetails.associate = (models) => {
    CartDetails.belongsTo(models.Carts, {
      onDelete: "cascade",
    });
    CartDetails.belongsTo(models.Products, {
      onDelete: "cascade",
    });
  };
  return CartDetails;
};
