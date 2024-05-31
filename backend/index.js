const express = require("express");
const multer = require("multer");
const path = require("path");
const json = express.json;
const urlencoded = express.urlencoded;
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();

const app = express();

connectDB();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));

// Setup storage for Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Appending extension
  },
});

const upload = multer({ storage: storage });

// Route for handling profile edit
app.post("/api/profile/edit", upload.single("profilePic"), (req, res) => {
  try {
    const profilePicUrl = `/uploads/${req.file.filename}`;
    // Save the profilePicUrl and other form data to the database

    res
      .status(200)
      .json({ message: "Profile updated successfully!", profilePicUrl });
  } catch (error) {
    res.status(500).json({ message: "Failed to update profile", error });
  }
});

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/user", require("./routes/userRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
