CREATE DATABASE college;
use college;

CREATE TABLE teacher (
id INT PRIMARY KEY,
name VARCHAR(50),
subject VARCHAR(60),
salary INT
);

INSERT INTO teacher
(id, name, subject,ctc)
VALUES
(23,"ajay", "math", 50000),
(47,"bharat","english",60000),
(18,"chetan","chemistry",45000),
(9, "divya", "physics",75000);

SELECT * FROM teacher;

SELECT * FROM teacher 
WHERE salary > 55000;

TRUNCATE TABLE teacher;

ALTER TABLE teacher
CHANGE COLUMN salary ctc INT;

UPDATE teacher
SET ctc = ctc + (ctc*0.25);

ALTER TABLE teacher
ADD COLUMN city VARCHAR(50) DEFAULT "Gurgaon";

ALTER TABLE teacher
DROP COLUMN ctc;


CREATE TABLE student (
roll_no INT PRIMARY KEY,
name VARCHAR(50),
city VARCHAR(60),
marks INT
);

INSERT INTO student
(roll_no, name, city,marks)
VALUES
(110,"adam","Delhi",76),
(108,"bob","mumbai",65),
(124,"casey","Pune",94),
(112,"duke","pune",80);

SELECT * FROM student;

SELECT * FROM student
WHERE marks > 75;

SELECT city, max(marks)
FROM student
GROUP BY city;

SELECT avg(marks)
FROM student;

ALTER TABLE student
ADD COLUMN grade VARCHAR(2);

UPDATE  student
SET grade = "0"
WHERE marks >= 80;

UPDATE  student
SET grade = "A"
WHERE 70 <= marks AND marks <=80;

UPDATE  student
SET grade = "B"
WHERE 60 <= marks AND marks <=70;







