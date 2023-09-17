create database musclemonsterdb;

//terminar de arrumar

create table tb_produto {
	id_produto          int primary key auto_increment,
	nm_produto          varchar(200),
	vl_valor            decimal(5,2),
	nr_qtd_estoque      int,
    ds_descricao        varchar(200),
	id_categoria        int > tb_categoria.id_categoria
};

create table tb_cliente {
	id_cliente          int primary key auto_increment,
	nm_cliente          varchar(200)
	ds_email            varchar(200)
	ds_telefone         varchar(200)
	ds_senha            varchar(200)
	dt_nascimento       date
	id_endereco         int >* tb_endereco.id_endereco
};


create table tb_categoria {
	id_categoria        int primary key auto_increment,
	ds_categoria        varchar(200)
};

create table tb_endereco {
	id_endereco         int primary key auto_increment,
	ds_rua              varchar(200)
	ds_bairro           varchar(200)
	nr_cep              int
	nr_numero           int
	ds_complemento      varchar(200)
};

create table tb_imagem {
	id_imagem           int primary key auto_increment,
	img_imagem           varchar(200),
    id_produto          int,
    foreign key (id_produto) references tb_produto(id_produto)
};

create table tb_pedido {
	id_pedido           int primary key auto_increment,
	id_cliente          varchar(200) *> tb_cliente.id_cliente
	dt_pedido           datetime
	ds_status           varchar(200)
	vl_total_pedido     decimal
	ds_endereco_entrega int > tb_endereco.id_endereco
};

create table tb_itens_pedido {
	id_item_pedido      int primary key auto_increment,
	id_pedido           int *> tb_pedido.id_pedido
	id_produto          int > tb_produto.id_produto
	qtd_produto         int
	vl_valor            int > tb_produto.vl_valor
	nr_total            int
};

create table tb_carrinho {
	id_carrinho         int primary key auto_increment,
    qtd_carrinho        int,
	id_cliente          int,
	id_produto          int,
    foreign key (id_produto) references tb_produto(id_produto),
    foreign key (id_cliente) references tb_cliente(id_cliente)
};	

create table tb_forma_pagamento {
	id_forma_pagamento  int primary key auto_increment,
	ds_forma_pagamento  varchar(200)
};

