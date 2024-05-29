--Create a function that returns all info from the artist details table for a given artist id, using a row variable.
CREATE OR REPLACE FUNCTION artist_by_id(artist INT)
RETURNS artist_details
AS $$
DECLARE 
artist_row artist_details%ROWTYPE;
BEGIN
	SELECT * INTO artist_row 
	FROM artist_details 
	WHERE artist_details.id = artist;
	
	RETURN artist_row;
END;
$$ LANGUAGE plpgsql;

SELECT * FROM artist_by_id(12);

--Create a function doing the same thing as above but using a record
CREATE OR REPLACE FUNCTION artist_by_id_record(artist INT)
RETURNS RECORD
AS $$
DECLARE 
art_record RECORD;
BEGIN
	SELECT * INTO art_record 
	FROM artist_details 
	WHERE artist_details.id = artist;
	
	RETURN art_record;
END;
$$ LANGUAGE plpgsql;

SELECT artist_by_id_record(12);
--Create a function that will return all rock songs, determined bu the artist id, with all of the artist details.
-----Prv nacin
CREATE OR REPLACE FUNCTION get_rock_songs()
RETURNS TABLE (
	song_name VARCHAR(100),
	genre VARCHAR(100),
	artist_date_of_birth DATE,
	artist_full_name VARCHAR(100),
	country VARCHAR(100),
	city VARCHAR(100),
	is_married BOOLEAN,
	spouse_name VARCHAR(100)
)AS $$
BEGIN
	RETURN QUERY
	SELECT song.name AS song_name, genre.name AS genre, ad.date_of_birth AS artist_date_of_birth,
	ad.full_name AS artist_full_name, ad.country AS country, ad.city AS city, ad.is_married AS is_married, ad.spouse_name AS spouse_name 
	FROM songs_genres sg
	INNER JOIN song ON sg.song_id = song.id
	INNER JOIN genre ON sg.genre_id = genre.id
	INNER JOIN artist_details ad ON ad.id = song.artist_id
	WHERE genre.name = 'Rock';
END;
$$ LANGUAGE plpgsql;
SELECT * FROM get_rock_songs();

----Vtor nacin
CREATE OR REPLACE FUNCTION get_rock_songs(artist INTEGER)
RETURNS TABLE (
	song_name VARCHAR(100),
	genre VARCHAR(100),
	artist_full_name VARCHAR(100),
	artist_date_of_birth DATE
		
)AS $$
BEGIN
	RETURN QUERY
	SELECT s.name AS song_name, genre.name AS genre, ad.full_name AS artist_full_name, ad.date_of_birth AS artist_date_of_birth
	FROM song s
	INNER JOIN songs_genres sg ON s.id = sg.genre_id
	INNER JOIN genre ON sg.genre_id = genre.id
	INNER JOIN artist_details ad ON s.artist_id = ad.id
	WHERE genre.name = 'Rock' AND s.artist_id = artist
	GROUP BY s.name, genre.name, s.artist_id,ad.full_name, ad.date_of_birth;
END;
$$ LANGUAGE plpgsql;
SELECT * FROM get_rock_songs(3);

--Create a function that returns the quantity of songs for a given album ID, only if the quantity is bigger than 5. If it is not, raise a notice. Use the if/else statement.
CREATE OR REPLACE FUNCTION get_total_songs(some_album_n INT)
RETURNS TEXT
AS $$
DECLARE
song_num INT;
BEGIN
	SELECT COUNT(s.name) INTO song_num  FROM song s
	INNER JOIN album a ON s.album_id = a.id
	WHERE a.id = some_album_n
	GROUP BY a.name;
	
	IF song_num > 5 THEN 
		RETURN 'Bigger than 5';
	ELSE 
		RETURN 'Num of songs is smaller than 5 ';
	END IF;
		
END;
$$ LANGUAGE plpgsql;

SELECT * FROM get_total_songs(5);

--Create a function that returns all artists that sang a song from a playlist with a certain id.
CREATE OR REPLACE FUNCTION sang_songs_playlists(some_artist_n INTEGER)
RETURNS TABLE(
artist_name VARCHAR(100),
sang_song VARCHAR(100),
playlist_title VARCHAR(100)
)AS $$
BEGIN
	RETURN QUERY
	SELECT a.name AS artist_name, s.name AS sang_song, p.title AS playlist_title FROM song s
	INNER JOIN artist a ON s.artist_id = a.id
	INNER JOIN playlists_songs ps ON s.id = ps.song_id
	INNER JOIN playlist p ON ps.playlist_id = p.id
	WHERE a.id = some_artist_n;
END;
$$ LANGUAGE plpgsql;

SELECT * FROM sang_songs_playlists(1)
