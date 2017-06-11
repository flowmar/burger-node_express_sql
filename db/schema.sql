-- Create the burgers database
CREATE DATABASE burgers_db;

-- Use the burgers database
USE burgers_db;

-- Create the burgers table
CREATE TABLE burgers
(id INTEGER NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(255) NOT NULL DEFAULT "Burger",
devoured BOOLEAN NOT NULL DEFAULT false,
date TIMESTAMP,
PRIMARY KEY (id)
);