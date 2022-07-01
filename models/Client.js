const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  nom: {
    type: String,
    required: [true, 'Nom est obligatoire']
  },
  prenom: {
    type: String,
    required: [true, 'Prénom est obligatoire']
  },
  email: {
    type: String,
    required: [true, 'Email est obligatoire']
  },
  motDePasse: {
    type: String,
    required: [true, 'Mot de passe est obligatoire']
  },
  role: {
    type: String,
    required: [true, 'Role est obligatoire']
  },

});

const Client = mongoose.model('client', ClientSchema);

module.exports = Client;