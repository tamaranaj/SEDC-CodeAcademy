--Show artist names with album names side by side
SELECT artist.name AS artist_name, album.name AS album_name FROM song s
INNER JOIN artist ON artist.id = s.artist_id
INNER JOIN album ON album.id = s.album_id
GROUP BY artist.name, album.name;

--Show the artist names and their spouse name for all artists including ones that don't have details
SELECT full_name, spouse_name
FROM artist_details;

--Show artist names and list of countries for all, including missing artist and missing details info
SELECT full_name, country, city
FROM artist_details;
