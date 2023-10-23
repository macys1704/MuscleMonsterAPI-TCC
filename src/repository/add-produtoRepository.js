import conexao from "./connection.js";
import axios from "axios";

const api = axios.create({
    baseURL:'http://localhost:5000'
})

export async function InserirNovoProduto(produto) {
    let comando = 'insert into tb_produto ( nm_produto,ds_categoria,ds_descricao, vl_valor, qtd_estoque) values (?, ?, ?, ?,?,?);';

    let [resposta] = await conexao.query(comando, [
        produto.nome, 
        produto.categoria,
        produto.descricao, 
        produto.valor, 
        produto.estoque, 
        produto.id]);

    produto.id = resposta.insertId

    return resposta;
}

export async function InserirImagem(id,imagem){

    const formData = new FormData();
    formData.append ('imagem',imagem)

    const resposta = await api.put(`/inserir/${id}/imagem`, formData, {
        headers:{
            "Content-Type":"multipart/form-data"
        },
    });

    return resposta.status
}

export async function listarProduto(id){

    try {
        let comando = `select url_img         as imagem,
        nm_produto      as produto,
        ds_categoria    as categoria,
        vl_valor        as preco,
        qtd_estoque     as estoque,
        ds_descricao    as descricao
        from tb_produto
        where id_produto = ? `;
    
        const [resposta] = await conexao.query(comando, [id]);

        return resposta[0]

    } catch (err) {
        throw new Error(err.message);
    }
}