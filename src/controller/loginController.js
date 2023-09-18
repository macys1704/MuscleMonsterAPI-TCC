import { Router } from "express";
import { verificarLogin } from "../repository/loginRepository.js";

const endpoint = Router();

endpoint.get('/login', async (req, resp) => {
  try {
    const credencial = await verificarLogin();
    resp.json(credencial);
  } catch (err) {
    resp.status(400).send({
        erro: err.message
    });
  }
});

export default endpoint;