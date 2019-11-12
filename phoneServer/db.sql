DROP DATABASE IF EXISTS phone;

CREATE DATABASE phone;

#         phone.sql 数据库指定
USE phone;

#2:创建表 phone_login
#3:添加几列
CREATE TABLE phone_login(
  id INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(50),
  upwd VARCHAR(32)
);

INSERT INTO
  phone_login
VALUES
  (null, 'tom', md5('123'));

INSERT INTO
  phone_login
VALUES
  (null, 'jerry', md5('123'));