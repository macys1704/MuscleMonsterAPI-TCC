import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import Addproduto from './controller/add-produtoController.js';

let server = express();

server.use(cors())
server.use(express.json())

server.use(Addproduto)

server.listen(process.env.PORT, () => console.log('API subiu!!!'))

