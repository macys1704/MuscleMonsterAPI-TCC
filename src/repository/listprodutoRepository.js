import conexao from "./connection.js";

export async function consultarProdutos(produto){

    const comando = `select * from tb_produto`;

    const [resposta] = await conexao.query(comando);
    return resposta;
}


export async function deletarProduto(id){
    const comando = 'delete * from tb_produto where id = ?';

    const [resposta] = await conexao.query(comando, [id]);

    return resposta;
}

export async function alterarProduto(id,produto){

        let comando = `
            update tb_produto 
                    nm_produto            = ?,
                   vl_valor               = ?,
                   vl_valor_promocional   = ?,
                   nr_qtd_estoque         = ?,
                   id_categoria           = ?,
                   bt_disponivel          = ?,
                   ds_descricao           = ?,
                  where id_produto        = ?
        `
      
        let [resp] = await conexao.query(comando, 
          [
            produto.nome,
            produto.valor,
            produto.valorPromocional,
            produto.qtdEstoque,
            produto.categoria,
            produto.disponivel,
            produto.descricao,
            id
          ])
        
        return resp.affectedRows;
      }
      
