module.exports = (sequelize, DataTypes) => {
  const user_feedback = sequelize.define(
    "user_feedback",
    {
      FEEDBACK_FNAME: { type: DataTypes.STRING },
      FEEDBACK_LNAME: { type: DataTypes.STRING },
      FEEDBACK_USER_EMAIL: { type: DataTypes.STRING },
    },
    {
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
  );
  return user_feedback;
};
