module.exports = (sequelize, DataTypes) => {
  const Carts = sequelize.define("Carts", {
    totalPrice: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });
  Carts.associate = (models) => {
    Carts.belongsTo(models.Users, {
      onDelete: "cascade",
    });
  };
  return Carts;
};
