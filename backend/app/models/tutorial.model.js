module.exports = mongoose => {
    const Tutorial = mongoose.model(
        "tutorial",
        mongoose.Schema(
            {
                title: String,
                description: String,
                published: Boolean       // optionall
            },
            {
                timestamps: true
            }
        )
    );
    return Tutorial;
}