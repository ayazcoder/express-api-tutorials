const addController = (req, res) => {
    try {
        return res.status(200).json({
            success: true,
            message: "The entry is added successfully",
        });
    } catch (error) {
        return res.status(501).json({
            success: false,
            message: "The entry is not addsed successfully...",
        });
    }
}
module.exports = { addController }