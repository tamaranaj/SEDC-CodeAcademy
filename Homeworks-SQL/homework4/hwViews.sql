-- Find the song count, max duration, and the avg duration per artist on all songs. Filter only records where max duration is more than the avg duration

SELECT a.name AS artist_name, COUNT(s.id) AS total_songs, AVG(s.duration) AS avg_song_duration, MAX(s.duration) AS max_song_duration  FROM artist a
INNER JOIN song s ON s.artist_id = a.id
GROUP BY a.name
HAVING MAX(s.duration) > AVG(s.duration)
ORDER BY total_songs DESC;


--Create a new view (vw_ArtistSongCounts) that will list all artist IDs and count of songs per artist

CREATE VIEW "ArtistSongCounts" AS
SELECT a.id AS artist_id , COUNT(s.id) AS total_songs FROM artist a
INNER JOIN song s ON s.artist_id = a.id
GROUP BY a.name, a.id
ORDER BY a.id;

SELECT * FROM "ArtistSongCounts";


--Change the view to show artist names instead of artist ID
SELECT a.name as artist_name, total_songs FROM "ArtistSongCounts"
INNER JOIN artist a On artist_id = a.id ;


--List all rows from the view ordered by the biggest song count
SELECT a.name as artist_name, total_songs FROM "ArtistSongCounts"
INNER JOIN artist a On artist_id = a.id 
ORDER BY total_songs DESC;


--Create a new view ArtistAlbumDetails that will list all artists(name) and count the albums they have
CREATE VIEW "ArtistAlbumDetails" AS
SELECT ar.name AS artist_name, COUNT(al.id) AS total_albums FROM artist ar
INNER JOIN song s ON s.artist_id = ar.id
INNER JOIN album al ON s.album_id = al.id
GROUP BY ar.name
ORDER BY total_albums DESC;

SELECT * FROM "ArtistAlbumDetails";
