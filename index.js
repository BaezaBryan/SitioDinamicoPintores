//importamos los paquetes de express y hbs
const express = require('express');
const hbs = require('hbs');
//creamos la app
const app = express();
//Definimos el motor de busqueda
app.set('view engine','hbs');

//Vamos a generar los partials
hbs.registerPartials(__dirname + '/views/partials/');

//generamos el sitio publico
app.use(express.static(__dirname + '/public'));

//configurar mis rutas
app.get('/', (req, res)=>{
   res.render('index', {
      autor: 'Bryan Baeza',
      year: new Date().getFullYear(),
      title: 'Indice'
   });
});

app.get('/Leonardo', (req, res)=>{
   res.render('Leonardo', {
      autor: 'Bryan Baeza',
      year: new Date().getFullYear(),
      title: 'Leonardo Da Vinci'
   });
});

app.get('/Miguel', (req, res)=>{
   res.render('Miguel', {
      autor: 'Bryan Baeza',
      year: new Date().getFullYear(),
      title: 'Miguel Angel'
   });
});

app.get('/Pablo', (req, res)=>{
    res.render('Pablo', {
      autor: 'Bryan Baeza',
      year: new Date().getFullYear(),
      title: 'Pablo Picasso'
   });
 });

 app.get('/Diego', (req, res)=>{
    res.render('Diego', {
      autor: 'Bryan Baeza',
      year: new Date().getFullYear(),
      title: 'Diego Rivera'
   });
 });

//Arrancar el servidor web
app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000');
});
