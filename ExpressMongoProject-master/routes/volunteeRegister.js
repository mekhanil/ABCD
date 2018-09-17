const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.render('volunteeRegister', {page: 'volunteeRegister'});
});

module.exports = router;

