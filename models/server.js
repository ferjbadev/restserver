const express = require('express');
const cors = require('cors');
const {dbConection} = require('../database/config')

class Server{

  constructor(){
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api/usuarios';

    // Conectar a la base de datos
    this.conectarDB();

    // Middlewares: son funciones que le agregan otra funcion al servidor web, es una funcion que siempre se ejecuta cuando se levanta el servidor
    // this.middlewares();
    // Rutas de mi aplicacion
    this.routes();
  }
  async conectarDB(){
    await dbConection();
  }

  // middlewares(){
  //   //Cors
  //   this.app.use(cors());

  //   //Lectura y parseo del body
  //   this.app.use(express.json);

  //   //Directorio publico
  //   this.app.use(express.static('public'));
  // }

  routes(){
    this.app.use(this.usuariosPath, require('../routes/usuarios'));
  }

  listen(){
    this.app.listen(this.port,() =>{
      console.log('Servidor corriendo en Puerto', this.port);
    });
  }
}
module.exports = Server;