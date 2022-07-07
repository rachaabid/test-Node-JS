const Client = require('../models/Client');

exports.createClient = async (req, res)=>{
  try {
    const client = new Client({
      nom: req.body.nom,
      prenom: req.body.prenom,
      email: req.body.email, 
      motDePasse: req.body.motDePasse,
      role: req.body.role
    });
    await Client.create(client)
    res.send({message: 'saved'});
  } catch (error) {
    res.status(500).send({
      message: error.message || 'some error occured while creating customer'
    });
  }
}

exports.getClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.send(clients);
  } catch (error) {
    res.status(500).send({
      message: error.message || 'some error occured'
    })
  }
}

exports.getClientById = async (req, res) => {
  try {
    const client = await Client.findById(req.params.idClient);
    res.send(client);
  } catch (error) {
    res.status(500).send({
      message: error.message || 'some error occured while creating customer'
    })
  }
}

exports.update = async (req, res) => {
  try {
    const clientUpd = await Client.findByIdAndUpdate(req.params.idClient, req.body);
    res.send({ message: ' updated' });
  } catch (error) {
    res.status(500).send({
      message: error.message || 'some error occured while creating customer'
    })
  }
}

exports.deleteClient = async (req, res) => {
  try {
    const supp = await Client.findByIdAndRemove(req.params.idClient);
    res.send({ message: ' deleted' });
  } catch (error) {
    res.status(500).send({
      message: error.message || 'some error occured'
    })
  }
}