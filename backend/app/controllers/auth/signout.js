module.exports = async (req, res) => {
  try {
    req.session.token = null;
    return res.status(200).send({ message: "You've been signed out!" });
  } catch (error) {
    console.error("Error in signout:", error);
    res.status(500).send({ message: "An error occurred while signing out." });
  }
};
