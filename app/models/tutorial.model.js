module.exports = mongoose => {
  const Tutorial = mongoose.model(
    "tutorial",
    mongoose.Schema(
      {
        title: String,
        description: String
      },
      { timestamps: true }
    )
  );
  return Tutorial;
};
