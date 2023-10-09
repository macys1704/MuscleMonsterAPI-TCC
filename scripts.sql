use musclemonsterdb;

create table tb_produto (
	id_produto          int primary key auto_increment,
    url_img				varchar(200),
	nm_produto          varchar(200),
	ds_categoria        varchar(200),
	vl_preco	        decimal(5,2),
	qtd_estoque         int
);

insert into tb_produto (url_img,nm_produto, ds_categoria, vl_valor, qtd_estoque, id_produto) values (?, ?, ?, ?, ?);

select * from tb_produto;

select * from tb_produto
where id_produto = ?;

select 
        url_img         as imagem,
        nm_produto      as produto,
        ds_categoria    as categoria,
        vl_preco        as preco,
        qtd_estoque     as estoque
        from tb_produto
        where id_produto = 1
        ;

drop table tb_produto;