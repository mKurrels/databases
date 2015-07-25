CREATE DATABASE chat;

USE chat;

CREATE TABLE Users (
  user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(20)
);

CREATE TABLE Messages (
  /* Describe your table here.*/
  message_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  message VARCHAR(160),
  roomname VARCHAR(20),
  username VARCHAR(20)
);


/* Create other tables and define schemas for them here! */



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

