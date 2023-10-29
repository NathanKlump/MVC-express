module.exports = (sequelize, DataTypes) => {
  const user_report = sequelize.define(
    "user_report",
    {
      INCI_DESCRIPTION: { type: DataTypes.STRING },
      INCI_DATE: { type: DataTypes.STRING },
      INCI_CATEGORY: { type: DataTypes.STRING },
      INCI_SUB_CATEGORY: { type: DataTypes.STRING },
      INCI_PLACE_CITY_DISTRICT: { type: DataTypes.STRING },
      INCI_STATE_UT: { type: DataTypes.STRING },
      INCI_SOURCE: { type: DataTypes.STRING },
      INCI_NAME: { type: DataTypes.STRING },
    },
    {
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
  );
  return user_report;
};
