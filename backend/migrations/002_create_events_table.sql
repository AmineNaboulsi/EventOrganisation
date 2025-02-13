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

INSERT INTO events (title, description, location, datetime, image, userId, places) VALUES
('Rock Concert', 'An amazing night of rock music.', 'Stadium A', '2025-03-15 19:00:00', 'https://s.wsj.net/public/resources/images/B3-BY031_TRUCKE_IM_20181002114854.jpg',30, 100),
('Football Match', 'A thrilling game between top teams.', 'Arena B', '2025-04-10 18:00:00', 'https://a.espncdn.com/photo/2022/0926/r1067322_1296x729_16-9.jpg', 30,  500),
('Tech Conference', 'A gathering of tech enthusiasts.', 'Convention Center C', '2025-05-20 09:00:00', 'https://images.tech.co/wp-content/uploads/2024/01/22094704/EPN_0539-3-1-e1705934863400-708x400.jpg', 31, 200),
('Art Exhibition', 'A showcase of modern art.', 'Gallery D', '2025-06-05 15:00:00', 'https://bykerwin-com.wnwd.co.uk/wp-content/uploads/2024/10/IMG_9843-Large-crypt-landscape-wall-amy-wordpress-banner.jpeg',31, 50),
('Coding Bootcamp', 'Learn full-stack development in an immersive experience.', 'Training Hub E', '2025-07-01 10:00:00', 'https://www.jackimwoods.com/wp-content/uploads/2023/01/tech_coding_bootcamp.jpg', 30, 30);
