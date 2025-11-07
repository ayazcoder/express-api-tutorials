const { teachers } = require("../data/data");

const teachersController = (req, res) => {
    return res.status(200).json({
        success: true,
        teachers
    });
}

module.exports = {teachersController}