const Commande = require('../models/Commande');


exports.create = async (req, res) => {
  try {
    const commande = new Commande({
      prixTotalDeVente: req.body.prixTotalDeVente,
      listeProduits: req.body.listeProduits,
      clientAssocié: req.body.clientAssocié
    });
    await Commande.create(commande)
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

exports.addId = async (req, res) => {
  try {
    const affect = await Commande.findByIdAndUpdate(req.params.idCommande, { $push: { listeProduits: req.params.idProduit, clientAssocié: req.params.idClient} }, { new: true });
    res.send({ message: 'product affected' });
  } catch (error) {
    res.status(500).send({
      message: error.message || 'some error occured'
    })
  }
}

exports.pullId = async (req, res) => {
  try {
    const desaffect = await Commande.findByIdAndUpdate(req.params.idCommande, { $pull: { listeProduits: req.params.produitId, clientAssocié:req.params.clientId } }, { new: true });
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
    const commandeUpd = await Commande.findByIdAndUpdate(req.params.idCommande);
    res.send({ message: ' updated' });
  } catch (error) {
    res.status(500).send({
      message: error.message || 'some error occured'
    })
  }
}

exports.deleteCommande = async (req, res) => {
  try {
    const supp = await Commande.findByIdAndRemove(req.params.idCommande);
    res.send({ message: ' deleted' });
  } catch (error) {
    res.status(500).send({
      message: error.message || 'some error occured '
    })
  }
}

