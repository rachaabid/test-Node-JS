const passport = require('passport');
const BearerStrategy = require('passport-http-bearer').Strategy;
const jwt = require('jsonwebtoken');
const Client = require('../models/Client');

passport.use(new BearerStrategy(
  (token, done)=>{
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY)
    const clientFound = Client.findById(decodedToken.clientId, (err, client)=>{
      if(err){
        return done(err);
      }
      if(!client){
        return done(null, false)
      }
      return done(null, client, {scope: 'all'})
    })
  }
  
));