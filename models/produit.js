const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProduitSchema = new Schema({
  nomProduit: {
    type: String,
    required: [true, 'Nom Produit est obligatoire']
  },
  description: {
    type: String,
    required: [true, 'Description est obligatoire']
  },
  quantite: {
    type: Number,
    required: [true, 'Quantité est obligatoire']
  },
  prixDeVente: {
    type: String,
    required: [true, 'Prix de vente est obligatoire']
  }
});

const Produit = mongoose.model('produit', ProduitSchema);

module.exports = Produit;