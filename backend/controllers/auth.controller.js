import User from "../models/user.model.js";

export const login = (req, res) => {
  console.log("Login User");
};
export const logout = (req, res) => {
  console.log("Logout User");
};
export const signup = async (req, res) => {
  try {
    const { fullName, username, password, comfirmPassword, gender } = req.body;

    if (password !== comfirmPassword) {
      return res.status(400).json({ message: "Password does not match" });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const boyGirl = gender === "female" ? "girl" : "boy";
    const profilePic = `https://avatar.iran.liara.run/public/${boyGirl}?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password,
      gender,
      profilePic,
    });

    await newUser.save();

    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      username: newUser.username,
      profilePic: newUser.profilePic,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
