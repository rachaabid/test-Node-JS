const Produit = require('../models/produit');

exports.createProduit = async (req, res)=>{
  try {
    const produit = new Produit({
      nomProduit: req.body.nomProduit,
      description: req.body.description,
      quantite: req.body.quantite, 
      prixDeVente: req.body.prixDeVente
    });
    await Produit.create(produit)
    res.send({message: 'saved'});
  } catch (error) {
    res.status(500).send({
      message: error.message || 'some error occured while creating product'
    });
  }
}

exports.getProduits = async (req, res) => {
  try {
    const produits = await Produit.find();
    res.send(produits);
  } catch (error) {
    res.status(500).send({
      message: error.message || 'some error occured'
    })
  }
}

exports.getProduitById = async (req, res) => {
  try {
    const produit = await Produit.findById(req.params.idProduit);
    res.send(produit);
  } catch (error) {
    res.status(500).send({
      message: error.message || 'some error occured'
    })
  }
}

exports.update = async (req, res) => {
  try {
    const produitUpd = await Produit.findByIdAndUpdate(req.params.idProduit);
    res.send({ message: ' updated' });
  } catch (error) {
    res.status(500).send({
      message: error.message || 'some error occured '
    })
  }
}

exports.deleteProduit = async (req, res) => {
  try {
    const supp = await Produit.findByIdAndRemove(req.params.idProduit);
    res.send({ message: ' deleted' });
  } catch (error) {
    res.status(500).send({
      message: error.message || 'some error occured'
    })
  }
}