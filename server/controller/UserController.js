require('dotenv').config();
const UserModel = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.testuser = async (req, res) => {
    res.json({ msg: "This is tested user data" });
};

exports.reguser = async (req, res) => {
    try {
        const { uname, email, pass } = req.body;
        
        if (!uname || !email || !pass) {
            return res.json({ 
                status: false,
                msg: "All fields are required" 
            });
        }

        const existingUser = await UserModel.findOne({ user_email: email });
        if (existingUser) {
            return res.json({ 
                status: false,
                msg: "Email already registered" 
            });
        }

        const hashedPass = await bcrypt.hash(pass, 12);
        const newUser = new UserModel({
            user_name: uname,
            user_email: email,
            user_pass: hashedPass
        });

        const savedUser = await newUser.save();
        res.json({ 
            status: true,
            msg: "Registration successful",
            user: savedUser
        });

    } catch (error) {
        res.json({ 
            status: false,
            msg: "Registration failed",
            error: error.message 
        });
    }
};

exports.loginuser = async (req, res) => {
    try {
        const { uemail, upass } = req.body;

        if (!uemail || !upass) {
            return res.json({ 
                loginsts: "3",
                msg: "Both email and password are required" 
            });
        }

        const user = await UserModel.findOne({ user_email: uemail });
        if (!user) {
            return res.json({ 
                loginsts: "1",
                msg: "User not found" 
            });
        }

        const isMatch = await bcrypt.compare(upass, user.user_pass);
        if (!isMatch) {
            return res.json({ 
                loginsts: "2",
                msg: "Incorrect password" 
            });
        }

        const token = jwt.sign(
            { id: user._id, email: user.user_email },
            process.env.JWT_USER_SECRET,
            { expiresIn: '1h' }
        );

        res.json({
            loginsts: "0",
            msg: "Login successful",
            token: token,
            user: {
                id: user._id,
                name: user.user_name,
                email: user.user_email
            }
        });

    } catch (error) {
        res.json({ 
            loginsts: "4",
            msg: "Login failed",
            error: error.message 
        });
    }
};