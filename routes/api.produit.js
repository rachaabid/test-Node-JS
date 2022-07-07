const express = require('express');
const router = express.Router();
const passport = require('passport');

const {createProduit, getProduits, getProduitById, update, deleteProduit}=require('../Controlers/Ctrl.produit');

router.post('/Produits', passport.authenticate('bearer', {session: false}),createProduit);

router.get('/Produits', passport.authenticate('bearer', {session: false}),getProduits);

router.get('/Produits/:idProduit', passport.authenticate('bearer', {session: false}),getProduitById);

router.put('/Produits/:idProduit', passport.authenticate('bearer', {session: false}),update);

router.delete('/Produits/:idProduit', passport.authenticate('bearer', {session: false}),deleteProduit);

module.exports = router;