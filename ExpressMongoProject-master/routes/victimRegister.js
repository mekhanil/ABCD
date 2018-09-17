const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.render('victimRegister', {page: 'victimRegister'});
});

module.exports = router;

