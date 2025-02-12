CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    location VARCHAR(255) NOT NULL,
    datetime TIMESTAMP NOT NULL,
    image TEXT DEFAULT '',
    userId INT,
    eventId INT,
    category_id int , 
    places int, 
    FOREIGN KEY (category_id) REFERENCES categories(id) ON UPDATE CASCADE ON DELETE SET NULL,
    FOREIGN KEY (userId) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (eventId) REFERENCES events(id) ON UPDATE CASCADE ON DELETE SET NULL
);

INSERT INTO events (title,description,location,datetime,image,places) VALUES 
('UM6P Party',' kdssdjkvjk vbvd dnsjvdskk','BenGhrir , Mar','2023-09-15','https://i.ibb.co/YT7KJtFB/pexels-wendywei-1190297.jpg',250),
('Music Festival',' kdssdjkvjk vbvd dnsjvdskk','Austin, TX','2023-10-01','https://i.ibb.co/m59t6S3C/pexels-joshsorenson-976866.jpg',400),
('Amine s engaged',' kdssdjkvjk vbvd dnsjvdskk','engaged married event','2023-11-05','https://i.ibb.co/tMHndMZ6/pexels-asadphoto-169198.jpg',100);