--Creando la Base de Datos - Registro de Usuarios

CREATE DATABASE registrodeusuarios;

--Utilizando la base de Datos
USE registrodeusuarios;

--CRACIÓN DE TABLAS 
create table  employeesss (
    id int  NOT NULL IDENTITY primary key,
    first_surname varchar(25) not null,
    second_surname varchar(25) not null,
    first_name varchar(20) not null,
    other_name varchar(20) not null,
    country_employment varchar(25) not null,
    identification varchar(20) not null,
    number_identification varchar(20) not null,
    email varchar(45) not null,
    date_admission varchar(20) not null,
    area varchar(15) not null,
    condition varchar(15) not null,
);