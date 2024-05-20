--List all song names with genre names
SELECT genre.name AS genre_name, song.name AS song_name FROM songs_genres sg
INNER JOIN song ON sg.song_id = song.id
INNER JOIN genre ON sg.genre_id = genre.id
GROUP BY genre.name, song.name;

--List all song names with playlist names
SELECT p.title AS playlist_name, s.name AS song_name FROM playlists_songs ps
INNER JOIN playlist AS p ON p.id = ps.playlist_id
INNER JOIN song AS s ON s.id = ps.song_id;

--List all album names and rating that have rating above 4 with the artist name
SELECT artist.name, album.name, album.rating FROM song s
INNER JOIN artist ON artist.id = s.artist_id
INNER JOIN album ON album.id = s.album_id
WHERE album.rating > 4
ORDER BY album.rating;

--List all explicit song names and artist names without missing data
SELECT song.name AS song_name, song.explicit, artist.name AS artist_name FROM song
INNER JOIN artist ON artist.id = song.artist_id
WHERE song.explicit = true  AND song.name IS NOT NULL;
