import { Router } from "express";
import { consultarProdutos, deletarProduto} from "../repository/listprodutoRepository.js";

let endpoints = Router();

endpoints.delete('/deletar-produto/:id', async (req, resp) => {
    try {
      let id = req.params.id;
      let r = await deletarProduto(id);
      if (r == 0)
        throw new Error('Produto não pode ser excluído.');
  
      resp.send();
    }
    catch (err) {
      resp.status(500).send({ erro: err.message });
    }
  });

  endpoints.get('/consultar-produto', async (req, resp) => {

    let resposta = await consultarProdutos()
    resp.send(resposta);
  });

  endpoints.put('/alterar-produto/:id', async (req, resp) => {
    try {
      let produto = req.body;
      let id = req.params.id;

  
      let r = await alterar(id, produto);
      resp.send();
    }
    catch (err) {
      resp.status(500).send({ erro: err.message });
    }
    
  
  })


export default endpoints;