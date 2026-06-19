const express = require("express");

const router = express.Router();

router.post("/login", (req, res) => {

    const { email, password } = req.body;

    if (
        email === "admin@gmail.com" &&
        password === "12345"
    ) {

        res.json({
            success: true,
            message: "Login Successful"
        });

    } else {

        res.json({
            success: false,
            message: "Invalid Email or Password"
        });

    }

});

module.exports = router;