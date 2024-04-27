import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || "",
    );

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
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

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
