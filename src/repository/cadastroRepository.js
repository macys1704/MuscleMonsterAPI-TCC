import conexao from "./connection.js"; 

export async function NovoCadastro(cliente) {
    const comando = 'insert into tb_cadastro_cliente (nm_cliente, ds_email, ds_telefone, ds_senha, id_cliente) values (?, ?, ?, ?, ?)';

    const [resposta] = await conexao.query(comando, [cliente.cliente, cliente.email, cliente.telefone, cliente.senha, cliente.id]);

    cliente.id_cliente = resposta.insertId;

    return resposta;
}
