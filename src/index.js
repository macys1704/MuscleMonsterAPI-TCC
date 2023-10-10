import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import Addproduto from './controller/add-produtoController.js';
import listproduto from './controller/listprodutoController.js';
import cadastroController from './controller/cadastroController.js';
import loginController from './controller/loginController.js'

let server = express();

server.use(cors())
server.use(express.json())

server.use(Addproduto)
server.use(listproduto)
server.use(cadastroController)
server.use(loginController)

server.listen(process.env.PORT, () => console.log('API subiu!!!'))

