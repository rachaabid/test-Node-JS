const express = require('express');
const router = express.Router();
// const passport = require('passport');

const {createClient, getClients, getClientById, update, deleteClient}=require('../Controlers/Ctrl.Client');

router.post('/Clients', passport.authenticate('bearer', {session: false}),createClient);

router.get('/Clients', passport.authenticate('bearer', {session: false}),getClients);

router.get('/Clients/:idClient', passport.authenticate('bearer', {session: false}),getClientById);

router.put('/Clients/:idClient', passport.authenticate('bearer', {session: false}),update);

router.delete('/Clients/:idClient', passport.authenticate('bearer', {session: false}),deleteClient);