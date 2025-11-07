const { schools } = require("../data/data");

const schoolsController = (req, res) => {
    return res.json({
        success: true,
        schools,
    });
}

module.exports = {schoolsController}