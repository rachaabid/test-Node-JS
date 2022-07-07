const express = require('express');
const cors = require('cors');
const morgan = require ('morgan');

const app = express();
require('./passport-strategies/bearer')

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(morgan('dev'));

require('./db/connect');
require('dotenv').config();

const apiClient=require('./routes/api.client');
const apiProduit=require('./routes/api.produit');
const apiSignupLogin = require('./routes/api.S-L');
const apiCommande=require('./routes/api.commande');

app.use('/api/v1', apiClient);
app.use('/api/v1', apiProduit);
app.use('/api/v1', apiSignupLogin);
app.use('/api/v1', apiCommande);

app.listen(process.env.port || 3000, function(){
  console.log('now listening for requests');
})