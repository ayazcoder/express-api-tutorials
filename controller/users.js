const {User} = require('../models/Users');

const usersController = async function (req, res) {
  try {
    // Fetch all users from the database
    const users = await User.find().select('-__v -password')

    return res.status(200).json({
      success: true,
      total: users.length,
      users,
    });
  } catch (err) {
    console.error('Error fetching users:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch users from database',
    });
  }
};

module.exports = { usersController };
