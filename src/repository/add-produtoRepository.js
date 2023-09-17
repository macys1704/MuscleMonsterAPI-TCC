import conexao from "./connection.js";

export async function InserirNovoProduto(produto) {
    const comando = 'insert into tb_produto (nm_produto, ds_categoria, vl_valor, nr_estoque, id_produto) values (?, ?, ?, ?, ?)';

    const [resposta] = await conexao.query(comando, [produto.nome, produto.categoria, produto.valor, produto.estoque, produto.id]);

    produto.id = resposta.insertId

    return resposta;
}

