CREATE DATABASE college;
CREATE DATABASE xyz_company;
DROP DATABASE xyz_company;

use college;

CREATE TABLE student (
roll_no INT,
name VARCHAR(30),
age INT 
);

INSERT INTO student
VALUES
(101, "Shankar", 22),
(102, "Sneha", 21),
(103, "Ram", 25);

SELECT * FROM Student;

CREATE DATABASE IF NOT EXISTS instagram;

DROP DATABASE IF EXISTS college;

SHOW DATABASES;

USE instagram;

CREATE TABLE instagram (
roll_no INT,
name VARCHAR(30),
age INT 
);

INSERT INTO instagram
VALUES
(101, "Shankar", 22),
(102, "Sneha", 21),
(103, "Ram", 25);

SELECT * FROM instagram;

SHOW TABLES;


CREATE TABLE user (
id INT , 
age INT,
name VARCHAR(30) NOT NULL,
email VARCHAR(50) UNIQUE, 
followers INT DEFAULT 0,
following INT,
CONSTRAINT age_check CHECK (age>=13),
PRIMARY KEY (id)
);


CREATE TABLE posts (
id INT PRIMARY KEY,
content VARCHAR(100),
user_id INT,
FOREIGN KEY (user_id) references user(id)
);

INSERT INTO user
(id,age, name, email, followers, following)
VALUES
(101, 24, "adam", "adam@gmail.com", 240, 233),
(102, 21,  "ram", "ram@gmail.com", 500, 100),
(3, 24, "raju", "raju@yahoo.com", 600, 900);

INSERT INTO user
(id,age, name, email, followers, following)
VALUES
(301, 24, "raj", "raj@yahoo.com", 100, 900);

SELECT id, name,email FROM user;

SELECT * FROM user
WHERE followers >= 600;

SELECT name, followers
FROM user
WHERE followers >= 600;

SELECT name, age
FROM user
WHERE age < 24;

SELECT name, age
FROM user
WHERE age + 1 = 22;

SELECT name, age
FROM user
WHERE age  = 24 ;

SELECT name, age
FROM user
WHERE age  BETWEEN 15 AND 24;

SELECT name, followers, email
FROM user
WHERE email  IN ("raju@yahoo.com", "ram@gmail.com");

INSERT INTO user
(id,age, name, email, followers, following)
VALUES
(5, 14, "eve", "eve@yahoo.com", 400, 145),
(6, 16, "farah", "farah@gmail.com", 10000, 1000);

SELECT name, followers, email
FROM user
WHERE age  IN (14,16);

SELECT name, followers, email
FROM user
WHERE age NOT IN (14,16);

SELECT name, followers, email
FROM user
WHERE age > 15
LIMIT 2;


SELECT name, age, followers
FROM user
ORDER by followers ASC;

SELECT name, age, followers
FROM user
ORDER by followers DESC;

SELECT max(followers)
FROM user;

SELECT count(age)
FROM user
WHERE age = 14;

SELECT min(age)
FROM user;

SELECT avg(age)
FROM user;

SELECT age, sum(followers)
FROM user;

SELECT age, count(id)
FROM user
GROUP BY age;

use instagram;

SELECT age, max(followers)
FROM user
GROUP BY age
HAVING max(followers) > 200
ORDER BY age ASC;

UPDATE user
SET followers   = 600
WHERE age = 24;

SET SQL_SAFE_UPDATES = 0;

SELECT * FROM user;

delete from user
where age = 14;

ALTER TABLE user
ADD COLUMN city VARCHAR(25) DEFAULT "MUMBAI";

ALTER TABLE user
RENAME TO instaUser;

SELECT * FROM instaUser;

ALTER TABLE user
DROP COLUMN age;

ALTER TABLE instaUser
RENAME TO user;

SELECT * FROM user;

ALTER TABLE user
CHANGE COLUMN followers subs INT DEFAULT 0;

ALTER TABLE user
MODIFY subs INT DEFAULT 5;

INSERT INTO user
(id,age, name, email, following)
VALUES
(590, 34, "shankar", "shankar@gmail.com", 440, 1425);

INSERT INTO user
(id, name, email, following)
VALUES
(7, "gemini", "gem@yahoo.com",120);

DROP TABLE posts;

TRUNCATE TABLE user; 
