const { users } = require("../data/data");

const usersController = (req, res) => {
    return res.json({
        success: true,
        total: users.length,
        users,
    });
}
module.exports = {usersController}