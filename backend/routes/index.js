const { Router } = require('express');
const router = Router();
const correos = require('./correos');

router.use('/correos',correos);
router.get('/',(req,res)=>{
  res.json({mensaje: 'Bienvenidos a nuestra API'});
});

module.exports = router;
