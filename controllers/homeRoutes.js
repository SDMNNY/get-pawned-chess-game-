const router = require('express').Router();
const { Game, User } = require('../models');
// custom middleware 
const withAuth = require('../utils/auth');


router.get('/', withAuth, async (req, res) => {
    try { 

    }
})

















module.exports = router;
