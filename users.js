const { User, validate } = require('/Users/Darcie/Documents/project3/Something-Slight-Network-master/models/user');    //C:\Users\Darcie\Documents\project3\Something-Slight-Network-master\models\user.js
const express = require('express');
const router = express.Router();


router.post('/', async (req, res) => {
    const {error} = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }


    let user = await User.findOne({ email: req.body.email});
    if (user) {
        return res.status(400).send('That username already exists');
    } else {

        user = new User({
            name: req.body.name,
            email:req.body.email,
            password: req.body.email,
            zipcode: req.body.zipcode
        });

        await user.save();
        res.send(user);

    }
    
});


module.exports = router; 


