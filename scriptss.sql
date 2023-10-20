
create table tb_cliente(
id_cliente int primary key auto_increment,
nm_cliente varchar(100),
ds_email varchar(100),
ds_senha varchar(100),
ds_telefone varchar(100)
);


insert into tb_reclamacao (ds_reclamacao)
					value(?);

create table tb_admin(
id_admin int primary key auto_increment,
nm_usuario varchar(100),
ds_email varchar(100),
ds_senha varchar(100)
);

create table tb_categoria(
id_categoria int primary key auto_increment,
nm_categoria varchar(100) 
);

create table tb_informacoes_produto(
id_informacoes_produto int primary key auto_increment,
ds_material varchar(100),
ds_dimensoes varchar(100),
ds_extra varchar(1000) 
);

create table tb_produto (
id_produto int primary key auto_increment,
nm_produto varchar(100),
ds_fabricante varchar(100),
vl_preco int,
nr_garantia int,
ds_produto varchar(1000),
id_categoria int,
foreign key (id_categoria) references tb_categoria (id_categoria),
vl_preco_promocao decimal,
bt_promocao boolean,
qtd_estoque int,
id_informacoes_produto int,
foreign key (id_informacoes_produto) references tb_informacoes_produto (id_informacoes_produto)
);

create table tb_item_pedido(
id_item_pedido int primary key auto_increment,
qtd_item int,
id_pedido int,
id_produto int,
foreign key(id_pedido) references tb_pedido (id_pedido),
foreign key (id_produto) references tb_produto (id_produto)
);

