const express = require("express");
const { editProfile, getUsers } = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get('/users', getUsers);

router.put("/edit-profile", authMiddleware, editProfile);

module.exports = router;
