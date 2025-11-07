const { students } = require("../data/data");

const studentsController =  (req, res) => {
    return res.json({
        success: true,
        students,
    });
}
module.exports = { studentsController}