-- Active: 1688793101186@@127.0.0.1@3306@carrito
-- Creación de la tabla "productos" para almacenar información sobre los productos
create table productos(
  id bigint unsigned not null auto_increment primary key, -- Identificador único del producto
  nombre varchar(255) not null, -- Nombre del producto (no puede ser nulo)
  descripcion varchar(1024) not null, -- Descripción del producto (no puede ser nula)
  precio decimal(9,2) not null -- Precio del producto (número decimal con 2 decimales)
);

-- Creación de la tabla "fotos_productos" para almacenar las fotos asociadas a los productos
create table fotos_productos(
  id_producto bigint unsigned not null, -- ID del producto al que pertenece la foto
  foto varchar(255) not null, -- Nombre del archivo de la foto (no puede ser nulo)
  foreign key(id_producto) references productos(id) on delete cascade on update cascade -- Clave foránea que referencia la tabla "productos"
);

-- Creación de la tabla "clientes" para almacenar información sobre los clientes
create table clientes(
  id bigint unsigned not null auto_increment primary key, -- Identificador único del cliente
  nombre varchar(255) not null, -- Nombre del cliente (no puede ser nulo)
  direccion varchar(255) not null -- Dirección del cliente (no puede ser nula)
);

-- Creación de la tabla "ventas" para almacenar información sobre las ventas
create table ventas(
  id bigint unsigned not null auto_increment primary key, -- Identificador único de la venta
  id_cliente bigint unsigned not null, -- ID del cliente que realizó la venta
  total decimal(9,2) not null, -- Total de la venta (número decimal con 2 decimales)
  foreign key(id_cliente) references clientes(id) on delete cascade on update cascade -- Clave foránea que referencia la tabla "clientes"
);

-- Creación de la tabla "productos_vendidos" para almacenar los productos vendidos en cada venta
create table productos_vendidos(
  id_venta bigint unsigned not null, -- ID de la venta a la que pertenece el producto vendido
  id_producto bigint unsigned not null, -- ID del producto vendido
  foreign key(id_venta) references ventas(id) on delete cascade on update cascade, -- Clave foránea que referencia la tabla "ventas"
  foreign key(id_producto) references productos(id) on delete cascade on update cascade -- Clave foránea que referencia la tabla "productos"
);
