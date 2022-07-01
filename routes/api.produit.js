const express = require('express');
const router = express.Router();

const {createProduit, getProduits, getProduitById, update, deleteProduit}=require('../Controlers/Ctrl.produit');

router.post('/Produits', createProduit);

router.get('/Produits', getProduits);

router.get('/Produits/:idProduit', getProduitById);

router.put('/Produits/:idProduit', update);

router.delete('/Produits/:idProduit', deleteProduit);