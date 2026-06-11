CREATE TABLE pedidos (
    id SERIAL PRIMARY KEY,
    cliente VARCHAR(100),
    produto VARCHAR(100)
);

INSERT INTO pedidos (cliente, produto)
VALUES ('Luiz', 'Hamburguer');