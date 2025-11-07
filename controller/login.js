const loginController = (req, res) => {

    return res.status(200).json({
        success: true,
        message: "User logged In successfully!"
    })
}

module.exports = {loginController}