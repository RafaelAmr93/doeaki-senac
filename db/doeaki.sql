/* DB doeaki*/
CREATE DATABASE doeaki;
USE doeaki;

/* VOLUNTARIOS */
CREATE TABLE voluntarios(
    nome VARCHAR(50) NOT NULL,
    sobrenome VARCHAR(150) NOT NULL,
    nascimento INT NOT NULL,
    genero BOOLEAN,
    cpf BIGINT NOT NULL,
    email VARCHAR(255),
    celular INT NOT NULL,
    cep INT NOT NULL,
    endereco VARCHAR(255),
    PRIMARY KEY (cpf)
);

/* VOLUNTARIO TESTE*/
INSERT INTO voluntarios(
    nome, sobrenome, idade,
    genero, cpf, email,
    celular, cep, endereco
) VALUE (
    "Jose", "Santos da Rocha", 01011990,
    false, 12345678914, "josesantos@gmail.com",
    123456789, 17890587, "Av. Atlantica, 190"
);

/* DESASTRES NATURAIS */
CREATE TABLE desastre(
    id INT NOT NULL AUTO_INCREMENT,
    cidade VARCHAR(255) NOT NULL,
    estado CHAR(2) NOT NULL,
    cep INT,
    descricao TEXT,
    PRIMARY KEY (id)
);

/* DESASTRE TESTE */
INSERT INTO desastre(
    cidade, estado, cep, descricao
) VALUE (
    "Sao Sebastiao", "SP", 12345678,
    "Desmoronamentos de terra em comunidades em locais isolados"
);
