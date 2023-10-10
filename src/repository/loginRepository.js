import conexao from "./connection.js";

export async function verificarLogin(email,senha) {

    const comando = `
      SELECT 
      ds_email as email, 
      ds_senha as senha
      FROM tb_cadastro_cliente
      where ds_email = ?
      and ds_senha = ?
    `;
    
    let resposta = await conexao.query(comando, [email,senha]);
    let linhas = resposta[0];
    let linha = linhas[0];

    console.log(linha)

    return linha
}