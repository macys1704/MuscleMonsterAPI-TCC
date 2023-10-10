import { Router } from "express";
import { verificarLogin } from "../repository/loginRepository.js";

const endpoint = Router();

endpoint.post('/login', async (req, resp) => {
  try {
    let email = req.body.email;
    let senha = req.body.senha;

    let linha = await verificarLogin(email,senha)
    if(linha == undefined){
      throw new error ('Credenciais inválidas')
    }
    
  } catch (err) {
    resp.status(400).send({erro: err.message});
  }
});

export default endpoint;