const signupController = (req, res) => {

    try {
        console.log('before error ....')
        // throw new Error("Error created by Human...")
        console.log('after error ....')
        return res.status(200).json({
            success: true,
            message: 'Signup successful (dummy response)',
            user: { id: 2, username: 'new_user', createdAt: new Date() },
        });


    } catch (err) {
        console.log("error", err)
        return res.status(500).json({
            success: false,
            message: 'Signup is not successful (dummy response)',
        });
    }



}
module.exports = { signupController }