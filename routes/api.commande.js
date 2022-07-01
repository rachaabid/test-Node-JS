const express = require('express');
const router = express.Router();

const {create, getCommandes, getCommandeById, update, deleteCommande, addId, pullId}=require('../Controlers/Ctrl.commande');

router.post('/Commande', create);
router.get('/Commande', getCommandes);
router.get('/Commande/:idCommande', getCommandeById);
router.put('/Commande/:idCommande', update);
router.delete('/Commande/:idCommande', deleteCommande);
router.put('/Commande/affect/:idCommande/:idProduit/:idClient', addId);
router.put('/users/desaffect/:idCommande/:produitId/:clientId', pullId);