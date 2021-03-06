const { signup } = require('../services/user');
const { login } = require('../services/user');
const signupController = async(req, res)=>{
    const { email, password} = req.body;

    await signup(email, password);
    
    res.status(201).json({ message: 'SUCCESS'});

}




const loginController = async (req, res)=>{
    const { email, password} = req.body;

  const token = await login(email, password);

   res.json({token});
}

module.exports = {signupController, loginController};