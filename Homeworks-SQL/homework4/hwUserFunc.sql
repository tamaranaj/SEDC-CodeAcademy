-- Calculate rating of album by artist
SELECT art.name AS artist_name, album.name AS album_name, ROUND(AVG(album.rating),2) AS avg_rating FROM artist art
INNER JOIN song s ON art.id = s.artist_id
INNER JOIN album ON s.album_id = album.id
GROUP BY artist_name, album_name;


--Get longest song by genre
SELECT genre.name AS genre, MAX(s.duration) AS song_duration FROM song s
INNER JOIN songs_genres sg ON sg.song_id = s.id
INNER JOIN genre ON genre.id = sg.genre_id
GROUP BY genre.name
ORDER BY song_duration DESC;


--Create text like "<Artist_Name> best rated album is <Name_of_album>"
CREATE OR REPLACE FUNCTION get_artist_best_album(artist_i_d INTEGER)
RETURNS TABLE(
	artist_name VARCHAR(100),
	album_name VARCHAR(100),
	album_rating NUMERIC
)
AS $$
DECLARE
best_rating TEXT;
album_rating INT;
BEGIN
	RETURN QUERY
	SELECT artist.name AS artist_name, album.name AS album_name, 
	MAX(album.rating) AS album_rating 
	FROM song s
	INNER JOIN artist ON artist.id = s.id
	INNER JOIN album ON album.id = s.album_id
	WHERE artist.id = artist_i_d
	GROUP BY artist.name, album.name, album.rating;
	
	
END;

$$ LANGUAGE plpgsql;

SELECT CONCAT(artist_name, ' best album is ', album_name,'.') AS text FROM get_artist_best_album(5);

--Create a temp table with playlist that has songs which are in albums which are good rated (4.5+)
CREATE TEMP TABLE new_playlist AS
SELECT s.name AS song_name, a.name AS album_name, a.rating FROM album a
INNER JOIN song s ON s.album_id = a.id
WHERE a.rating > 4.5;

SELECT * FROM new_playlist;


--Create function that will provide artist name, concatenated genre names he has songs in
CREATE OR REPLACE FUNCTION get_artist_genres(art_i_d INTEGER)
RETURNS TEXT
AS $$
DECLARE txt TEXT;

BEGIN

SELECT CONCAT(artist.name, ' has songs in ',genre.name) AS genre INTO txt FROM song s
INNER JOIN songs_genres sg ON s.id = sg.song_id
INNER JOIN genre ON sg.genre_id = genre.id
INNER JOIN artist ON s.artist_id = artist.id
WHERE artist.id = art_i_d
GROUP BY artist.name, genre.name;
RETURN txt;
END;
$$ LANGUAGE plpgsql;

SELECT * FROM get_artist_genres(5);

--Create a function that wii provide: num of songs per album, num of songs per playlist, num of songs per genre
 CREATE OR REPLACE FUNCTION get_songs(art_i_d INTEGER)
RETURNS text
AS $$
DECLARE
num_songs_album INT;
num_songs_playlist INT;
num_songs_genre INT;

BEGIN
SELECT COUNT(song.name) INTO num_songs_album FROM song
INNER JOIN album ON album.id = song.album_id
WHERE song.artist_id = art_i_d
GROUP BY album.name;

SELECT COUNT(s.name) INTO num_songs_playlist FROM song s
INNER JOIN playlists_songs ps ON s.id = ps.song_id
INNER JOIN playlist ON ps.playlist_id = playlist.id
WHERE s.artist_id = art_i_d;

SELECT COUNT(s.name) INTO num_songs_genre FROM songs_genres sg
INNER JOIN song s ON sg.song_id = s.id
INNER JOIN genre ON sg.genre_id = genre.id
WHERE s.artist_id =  art_i_d;
RETURN CONCAT('Artist with id ',  art_i_d, ' has ',num_songs_album, 'songs in album, ', num_songs_playlist , 'songs in playlist ,',' in ', num_songs_genre, ' genre.'   );

END;

$$ LANGUAGE plpgsql;
SELECT * FROM get_songs(1);
