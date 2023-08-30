const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

//Registar
router.post('/register', async (req, res) => {
    try{
        //Generate hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            username : req.body.username,
            email : req.body.email,
            password : hashedPassword
        });

        //Save user in the database
        const user = await newUser.save();
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err)
    }  
})

//login
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        });
        !user && res.status(400).json('Wrong credentials')
        const validatePassword = await bcrypt.compare(req.body.password, user.password);
        !validatePassword ? res.status(400).json('Wrong credentials'):res.status(200).json({message:'login successful'})
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router