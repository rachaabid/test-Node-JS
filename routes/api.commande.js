const express = require('express');
const router = express.Router();


const {create, getCommandes, getCommandeById, update, deleteCommande, addId, pullId}=require('../Controlers/Ctrl.commande');

router.post('/Commande/:idProduit', create);
router.get('/Commande', getCommandes);
router.get('/Commande/:idCommande', getCommandeById);
router.put('/Commande/:idCommande', update);
router.delete('/Commande/:idCommande', deleteCommande);
router.put('/users/desaffect/:idCommande/:produitId', pullId);

module.exports = router;