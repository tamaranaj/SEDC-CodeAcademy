-- Calculate the count of all songs in the system
SELECT song.name, COUNT(song.name) AS number_of_song FROM song
GROUP BY song.name;

-- Calculate the count of all songs per artist in the system
SELECT artist.name AS artist_name, COUNT(song.name) AS num_of_songs FROM song
INNER JOIN artist ON artist.id = song.artist_id
GROUP BY artist_name
ORDER BY num_of_songs DESC;

-- Calculate the count of all songs per artist in the system from first 100 albums (ID<100)
SELECT artist.name, COUNT(song.id) AS num_of_songs FROM song
INNER JOIN artist ON artist.id = song.artist_id
INNER JOIN album ON album.id = song.album_id
WHERE album.id < 100
GROUP BY artist.name
ORDER BY num_of_songs;

-- Find the maximal duration and the average duration per song for each artist
SELECT artist.name AS artist_name, AVG(song.duration) AS avg_song_duration, MAX(song.duration) AS max_song_duration FROM song 
INNER JOIN artist ON artist.id = song.artist_id
GROUP BY  artist.name;

-- Calculate the count of all songs per artist in the system and filter only song count greater than 10
SELECT artist.name, COUNT(song.id) AS num_of_songs FROM artist
INNER JOIN song ON artist.id = song.artist_id
GROUP BY artist.name
HAVING COUNT(song.id)>10;

-- Calculate the count of all songs per artist in the system for the first 100 albums (ID<100) and filter artists with more than 10 song count
SELECT artist.name, COUNT(song.id) AS num_of_songs FROM song
INNER JOIN artist ON artist.id = song.artist_id
INNER JOIN album ON album.id = song.album_id
WHERE album.id < 100
GROUP BY artist.name
HAVING COUNT(song.id)>10
ORDER BY num_of_songs DESC;
