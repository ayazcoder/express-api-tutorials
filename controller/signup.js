const { User } = require("../models/Users")

const signupController = async function (req, res) {
  const { name, email, password, username } = req.body
  if (!name || !email || !password || !username) {
    return res.status(404).json({
      success: false,
      message: "some required fields are missing!"
    })
  }

  try {
    const newUser = User({ name, username, email, password })
    const res2 = await newUser.save()

    res.status(200).json({
      success: true,
      message: "User saved!",
      user: res2
    })
  } catch (error) {
    console.log(error)
    return res.status(404).json({
      success: false,
      message: "something went wrong user data not saved!"
    })
  }
}

const updateUserController = async function (req, res) {
  const id = req.params.id
  const { name, password } = req.body

  try {
    const updatedUser = await User.findByIdAndUpdate(id, { name, password }, { new: true })
    console.log('updatedUser', updatedUser)
    res.status(200).json({
      success: true,
      message: "User data updated",
      user: updatedUser
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong user data not updated!"
    })
  }
}
const deleteUserController = async (req, res) => {
  try {
    const id = req.params.id;

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found!",
      });
    }

    console.log("deletedUser:", deletedUser);

    return res.status(200).json({
      success: true,
      message: "User deleted successfully!",
      data: deletedUser,
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong! User not deleted.",
      error: error.message,
    });
  }
};
const getUserById = async (req, res) => {
  try {
    const id = req.params.id;

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found!",
      });
    }
    console.log("user:", user);
    return res.status(200).json({
      success: true,
      message: "User get successfully!",
      user: user,
    });
  } catch (error) {
    console.error("Error getting user:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong! User not getting.",
      error: error.message,
    });
  }
};

module.exports = { signupController, updateUserController, deleteUserController, getUserById }