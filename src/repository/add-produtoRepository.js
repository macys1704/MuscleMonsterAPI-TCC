import conexao from "./connection.js";

export async function InserirNovoProduto(produto) {
    let comando = 'insert into tb_produto (url_img, nm_produto,ds_categoria, vl_preco, qtd_estoque) values (?, ?, ?, ?, ?);';

    let [resposta] = await conexao.query(comando, [produto.url,produto.nome, produto.categoria, produto.valor, produto.estoque, produto.id]);

    produto.id = resposta.insertId

    return resposta;
}

export async function listarProduto(produto){

    try {
        let comando = `url_img         as imagem,
        nm_produto      as produto,
        ds_categoria    as categoria,
        vl_preco        as preco,
        qtd_estoque     as estoque
        from tb_produto
        where id_produto = ? `;
    
        const [resposta] = await conexao.query(comando, [id]);

    } catch (err) {
        throw new Error(err.message);
    }
}