//index, show, store, update, destroy
const User = require('../models/User')

module.exports = {
    async store(req, res){
        const { email } = req.body;

        //create user variable
        let user = await User.findOne({ email });

        //if cant find a exist user...
        if(!user) 
        {
            //... create a new user with the provided email.
            user = await User.create({ email });
        }
        
        //const user = await User.create({ email });

        return res.json(user);
    }
}