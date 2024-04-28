import User from "../models/user.model.js";

export const getUsers = async (_, res) => {
  try {
    const allUsers = await User.find().select("-password");
    res.status(200).json(allUsers);
  } catch (error) {
    console.error("Error in getUsers: ", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
