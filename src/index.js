import 'dotenv/config';
import express from 'express';
import cors from 'cors';


let server = express();

server.use(cors())
server.use(express.json())


server.listen(process.env.PORT, () => console.log('API subiu'))
