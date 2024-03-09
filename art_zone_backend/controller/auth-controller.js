const db = require("../util/database");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signIn = async (req, res, next) => {
  try {
    const { userEmail, userPassword } = req.body;

    // Retrieve user from the database based on the provided email
    const userResult = await db.query("SELECT * FROM user_tb WHERE email = ?", [
      userEmail,
    ]);

    const user = userResult[0][0]; // Extract the first user from the result

    if (!user) {
      return res.status(401).json({ message: "User not found." });
    }

    // Compare the hashed password with the provided password
    const passwordMatch = await bcrypt.compare(userPassword, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid password." });
    }

    // Generate JWT
    const token = jwt.sign(
      { userId: user.uid, userEmail: user.email },
      'artzone_secret_key', // Your secret key for signing the token
      { expiresIn: "1h" } // Token expiration time
    );

    res.status(200).json({ token, userId: user.uid,  roleNo: user.role, }); // Send the token and user ID in the response
  } catch (error) {
    console.error("Error signing in:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

const registerAccount = async (req, res, next) => {
  try {
    const {
      username,
      userPhoneNo,
      userAddress,
      userEmail,
      userRole,
      userBio,
      userPassword,
      userConfirmPassword,
    } = req.body;

    // Check if user already exists with the same email or username
    const existingUserResult = await db.query(
      "SELECT * FROM user_tb WHERE email = ?",
      [userEmail]
    );

    const rows = existingUserResult[0];
    if (rows && rows.length > 0) {
      return res
        .status(400)
        .json({ message: "User already exists with this email." });
    }

    if (userPassword !== userConfirmPassword) {
      return res.status(400).json({ message: "Passwords do not match." });
    }

    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(userPassword, 12);
    } catch (error) {
      return res.status(400).json({ message: "password hashing error" });
    }

    await db.execute(
      "INSERT INTO user_tb (name, address, phone_no, email, password, role, avatar, bio) VALUES (?,?,?,?,?,?,?,?)",
      [
        username,
        userAddress,
        userPhoneNo,
        userEmail,
        hashedPassword,
        userRole,
        req.file.path,
        userBio,
      ]
    );

    res.status(201).json({
      message: "User registered successfully.",
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

exports.signIn = signIn;
exports.registerAccount = registerAccount;
