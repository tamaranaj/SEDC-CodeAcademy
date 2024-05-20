--Show all album names and it's rating
SELECT album.name, album.rating FROM album;

--Show all artists with their name and full name side by side
SELECT ad.full_name, artist.name AS art_name FROM artist_details ad
INNER JOIN artist ON artist.id = ad.artist_id;

--Show all songs with their lyrics side by side
SELECT song.name, sl.lyrics FROM song_lyrics sl
INNER JOIN song ON song.id = sl.song_id ;
