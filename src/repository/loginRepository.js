import conexao from "./connection.js";

export async function verificarLogin() {

    const comando = `
      SELECT ds_email as email, ds_senha as senha
      FROM tb_cadastro_cliente
    `;
    const [resposta] = await conexao.query(comando);
    resposta[0]
}