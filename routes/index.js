var express = require('express');
var router = express.Router();
var request = require('request');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sdd', { title: 'Express' });
});
router.get('/consultar', function(req, res, next) {
  res.render('consultar', { title: 'Express' });
});

router.get('/borrar', function(req, res, next) {
  res.render('eliminar', { title: 'Express' });
});

router.get('/delete', function(req, res, next) {
var myId2 = req.query.id;
request.delete('https://proyectoapirestjdad.herokuapp.com/api/music/'+ myId2, function(err,response,data){
  if(err){
    res.status(404).json({
        mensaje: "No existe"
      });
  }else {
     var datos=JSON.parse(data);
     if(data.id==undefined){
      res.status(404).json({
        mensaje: "No existe"
      });
    }else{
      res.render('eliminados',{id:datos.id, Grupo:datos.Grupo , Genero:datos.Genero, Fundacion:datos.Fundacion, Integrantes:datos.Integrantes});
    }
      //res.render('eliminados',{id:datos.id, Grupo:datos.Grupo , Genero:datos.Genero, Fundacion:datos.Fundacion, Integrantes:datos.Integrantes});
      console.log(data.id);
    }

});

  //res.render('consultar', { title: 'Express' });
});


router.get('/buscar', function(req, res, next) {
var myId = req.query.id;
request('https://proyectoapirestjdad.herokuapp.com/api/music/'+ myId, function(err,response,data){
	if(err){
		res.status(404).json({
        mensaje: "No existe"
      });
	}else {
  		var datos=JSON.parse(data);
      if (datos.id==undefined){
        res.status(404).json({
        mensaje: "No existe"
      });


      }else{
      res.render('alfin',{id:datos.id, Grupo:datos.Grupo , Genero:datos.Genero, Fundacion:datos.Fundacion , Link: datos.Link, Integrantes: datos.Integrantes});
      console.log(datos.id);
     // console.log(JSON.stringify(data));
    }
  }

});

  //res.render('consultar', { title: 'Express' });
});


module.exports = router;
