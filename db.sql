CREATE table greetings(
id integer PRIMARY KEY AUTOINCREMENT,
language text,
greeting text

);


SELECT * 
FROM greetings;
SELECT count(*) 
FROM greetings;

INSERT INTO greetings (language, greeting) VALUES('isZulu', 'Sawubona');

--add two more languages of choice 
INSERT INTO greetings (language, greeting) VALUES('Setswana', 'Dumela'); 
INSERT INTO greetings (language, greeting) VALUES('SeSotho', 'Lekae'); 

--delete from greetings where id>1
--delete from greetings where id in (2,3);