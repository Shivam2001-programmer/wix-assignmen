const User = require("../models/User");

const getUsers = async function(req, res, next) {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch(error) {
    console.log(error);
    next();
  }
}

const editProfile = async (req, res) => {
  const { username, email, profilePic } = req.body;
  try {
    console.log(req.body);
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    user.username = username || user.username;
    user.email = email || user.email;
    user.profilePic = profilePic || user.profilePic;

    await user.save();
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

module.exports = { editProfile, getUsers };
