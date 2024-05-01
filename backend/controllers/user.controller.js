import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
  try {
    if (req.query.excludeSelf !== undefined) {
      const filteredUsers = await User.find({
        _id: { $ne: req.user._id },
      }).select("-password");
      return res.status(200).json(filteredUsers);
    }

    const allUsers = await User.find().select("-password");
    res.status(200).json(allUsers);
  } catch (error) {
    console.error("Error in getUsers: ", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
