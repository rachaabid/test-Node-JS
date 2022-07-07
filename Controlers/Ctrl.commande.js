const Commande = require('../models/Commande');
const Produit = require('../models/produit');


exports.create = async (req, res) => {
  try {
    const commande = new Commande({
      prixTotalDeVente: req.body.prixTotalDeVente,
      listeProduits: req.body.listeProduits,
      clientAssocié: req.body.clientAssocié
    });
    const commandeCreated = await Commande.create(commande)
     await Commande.findByIdAndUpdate(commandeCreated._id, { $push: { listeProduits: req.params.idProduit, clientAssocié: req.user.clientId} }, { new: true });
    await Produit.findByIdAndUpdate(req.params.idProduit, {$inc:{quantite: -1}}, {new: true});
    res.send({ message: 'saved' });
  } catch (error) {
    res.status(500).send({
      message: error.message || 'some error occured'
    });
  }
}

exports.getCommandes = async (req, res) => {
  try {
    const commandes = await Commande.find().populate('listeProduits');
    res.send(commandes);
  } catch (error) {
    res.status(500).send({
      message: error.message || 'some error occured'
    })
  }
}

exports.pullId = async (req, res) => {
  try {
    await Commande.findByIdAndUpdate(req.params.idCommande, { $pull: { listeProduits: req.params.produitId, clientAssocié:req.user.clientId } }, { new: true });
    res.send({ message: 'product desaffected' });
  } catch (error) {
    res.status(500).send({
      message: error.message || 'some error occured'
    })
  }
}

exports.getCommandeById = async (req, res) => {
  try {
    const commande = await Commande.findById(req.params.idCommande);
    res.send(commande);
  } catch (error) {
    res.status(500).send({
      message: error.message || 'some error occured'
    })
  }
}

exports.update = async (req, res) => {
  try {
    await Commande.findByIdAndUpdate(req.params.idCommande, req.body);
    res.send({ message: ' updated' });
  } catch (error) {
    res.status(500).send({
      message: error.message || 'some error occured'
    })
  }
}

exports.deleteCommande = async (req, res) => {
  try {
    await Commande.findByIdAndRemove(req.params.idCommande);
    res.send({ message: ' deleted' });
  } catch (error) {
    res.status(500).send({
      message: error.message || 'some error occured '
    })
  }
}

