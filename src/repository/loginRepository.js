import conexao from "./connection.js";

export async function verificarLogin(email,senha) {

    const comando = `
      SELECT 
        id_cliente as id,
        ds_email as email
      FROM tb_cadastro_cliente
      where ds_email = ?
      and ds_senha = ?
    `;
    
   const [dados] = await conexao.query(comando, [email,senha]);

  let linha = dados[0]

    return linha;
}