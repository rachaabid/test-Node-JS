const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommandeSchema = new Schema({
  prixTotalDeVente: {
    type: String,
    required: [true, 'prixTotalDeVente est obligatoire']
  },
  listeProduits: [{type: mongoose.Schema.Types.ObjectId, ref: 'produit'}],
  clientAssocié: {type: mongoose.Schema.Types.ObjectId, ref: 'client'}
},{
  versionKey: false,
  timestamps: true
});

const Commande = mongoose.model('commande', CommandeSchema);

module.exports = Commande;