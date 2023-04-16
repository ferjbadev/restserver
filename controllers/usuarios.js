const {response} = require('express')

const usuariosGet = (req, res = response) => {
  const query = req.query
    
    res.json({
    msg: 'get API - Controlador',
    query
  });
}
//este es otro comentario xD
const usuariosPut =(req, res = response) => {
  const {id} = req.params;

  res.json({
    msg: 'put API - Usuarios Put',
    id
  });
}

const usuariosPost = (req, res = response) => {
  const body = req.body;

  res.json({
    msg: 'post API - Usuarios Post',
    body
  });
}

const usuariosDelete = (req, res = response) => {
  res.json({
    msg: 'delete API - Usuarios Delete'
  });
}

const usuariosPatch = (req, res = response) => {
  res.json({
    msg: 'patch API - Controlador Patch'
  });
}

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch
}