import express from 'express'
import Cliente from '../models/cliente.js'
import Contato from '../models/contato.js'
import Endereco from '../models/endereco.js'

const router = express.Router()

router.get("/clientes", (_req, res) => {
  let contato = new Contato("email@email.com", "67999128666")
  let endereco = new Endereco("Campo Grande", "MS", "790002366", "Sao Francisco", "Centro") 
  let sample = new Cliente("Nome", "Razao", contato, "29692757000175", null, endereco)
  
  res.json([sample.toJson()]);
});

export default router
