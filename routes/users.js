var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = require('../models/grupos');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({}, function(err, datos) {
    res.json(datos);
  });

});


router.get('/:userId', function(req, res, next) {
  User.findOne({
    'id': req.params.userId
  }, function(err, datos) {
    if (datos == null) {
      res.status(404).json({
        mensaje: "No existe"
      });
    } else {
      res.status(200).json(datos);
    }

  });
  //res.json(req.params.userId);
});


router.post('/', function(req, res, next) {
  var usuario = User({
    id: req.body.id,
    Grupo: req.body.Grupo,
    Genero: req.body.Genero,
    Link: req.body.Link,
    Fundacion: req.body.Fundacion,
    Integrantes:req.body.Integrantes
  });
  //res.send(usuario);


  usuario.save(function(err, data) {
    if (err) {
      res.status(404).json({
        mensaje: "Error al guardar"
      });
    } else {
      res.status(201).json(data);
    }
  });

});

router.put('/:userId',function(req,res,next){
var item={

Grupo: req.body.Grupo,
Genero: req.body.Genero,
Link: req.body.Link,
Fundacion: req.body.Fundacion

};
User.findOneAndUpdate({
  'id':req.params.userId
},{$set:item},function(err,data){
  if(data==null){
res.status(404).json({
mensaje: 'id no existente'

});

  }else if(data.Grupo==null){
res.status(204).json({
mensaje: 'Contenido sin cuerpo'
});

  }else{
  res.status(200).json(data);
}
});

});

  
router.patch('/:userId',function(req,res,next){
var item={

Grupo: req.body.Grupo,
Genero: req.body.Genero,
Link: req.body.Link,
Fundacion: req.body.Fundacion,
Integrantes:req.body.Integrantes

};
User.findOneAndUpdate({
  'id':req.params.userId
},{$set:item},function(err,data){
  if(data==null){
res.status(404).json({
mensaje: 'id no existente'

});

  }else if(data.Grupo==null){
res.status(204).json({
mensaje: 'Contenido sin cuerpo'

});

  }else{
  res.status(200).json(data);
}
});

});


router.delete('/:userId', function(req, res, next) {
  User.findOneAndDelete({
    id: req.params.userId
  }, function(err, data) {
    if (err) {
      res.status(404).json(err);
    }
    res.status(201).json(data);
  });
});
router.delete('/', function(req,res,next){
  res.status(405).json({mensaje:'Accion no permitida'});
});

module.exports = router;
