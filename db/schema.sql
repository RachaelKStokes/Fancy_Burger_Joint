DROP DATABASE IF EXISTS user_db;
CREATE DATABASE user_db;

USE user_db;

CREATE TABLE restaurant (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  location VARCHAR(100),
  phone VARCHAR(100),
  email VARCHAR(100),
  password VARCHAR(100)
);

CREATE TABLE customer (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  password VARCHAR(100)
);

CREATE TABLE event (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
    date DATE,
    time TIME,
    location VARCHAR(100),
);

CREATE TABLE reservation (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_id INT,
  event_id INT,
  FOREIGN KEY (customer_id) REFERENCES customer(id),
  FOREIGN KEY (event_id) REFERENCES event(id)
);
