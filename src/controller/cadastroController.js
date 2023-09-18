import { Router } from "express";
import { NovoCadastro } from "../repository/cadastroRepository.js";

let endpoint = Router();


endpoint.post('/inserircadastro', async (req, resp) => {
    try {
        const cliente = await req.body;

        //validaçoes abaixo

        if(!cliente.cliente)
            throw new Error('⚠ cliente obrigatório')

        if(!cliente.email)
            throw new Error('⚠ email obrigatório')

        if(!cliente.telefone)
            throw new Error('⚠ telefone obrigatorio')

        const dados = await NovoCadastro(cliente)
        resp.send(dados)

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
    


    
})

export default endpoint