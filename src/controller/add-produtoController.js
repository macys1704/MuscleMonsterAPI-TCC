import { Router } from "express";
import { InserirNovoProduto } from '../repository/add-produtoRepository.js';

let endpoint = Router();


endpoint.post('/inserir', async (req, resp) => {
    try {
        const produto = await req.body;

        //inserir as validaçoes abaixo

        if(!produto.nome)
            throw new Error('⚠ nome obrigatório')

        if(!produto.categoria)
            throw new Error('⚠ categoria obrigatório')

        if(!produto.valor)
            throw new Error('⚠ valor obrigatorio')

        if(!produto.estoque)
            throw new Error('⚠ estoque obrigatório')

        const dados = await InserirNovoProduto(produto)
        resp.send(dados)

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
    


    
})

export default endpoint