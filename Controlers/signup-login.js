const Client = require('../models/Client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
  try {
   const clientFound = await Client.findOne({email: req.body.email})
   console.log(clientFound);
    if (clientFound) {
      return  res.send({ message: 'the email address is already in use' });
    }
    else {
      const salt = 10
      const hash = bcrypt.hashSync(req.body.motDePasse, salt);
      
      req.body.motDePasse=hash
      Client.create(req.body);
      res.json({ message: 'created!' });
    }
  }
  catch (error) {
    res.status(500).json({
      message: error.message || 'some error occured'
    });
  }
};

exports.login = async (req, res, next) => {
  try {
    const clientFound = await Client.findOne({ email: req.body.email })
    if (!clientFound) {
      return res.status(401).send({ message: ' Email ou mot de passe incorrecte' });
    }
    const valid = bcrypt.compare(req.body.motDePasse, clientFound.motDePasse)
    if (!valid) {
      return res.status(401).send({ message: ' Email ou mot de passe incorrecte' });
    }
    res.status(200).send({message: {
       clientId: clientFound._id,
       token: jwt.sign(
        { clientId: clientFound._id },
        process.env.SECRET_KEY,
        { expiresIn: '1d' }
    )}
    });
  } catch (error) {
    res.status(500).send({
      message: error.message || 'some error occured'
    });
  }
}


