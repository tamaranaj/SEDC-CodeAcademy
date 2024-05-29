
--Show all details for artists born before 01/04/1992
SELECT ad.full_name, ad.date_of_birth FROM artist_details ad
WHERE ad.date_of_birth < '1992-04-01'
ORDER BY ad.date_of_birth DESC;

--Show all details for artists from Germany
SELECT * FROM artist_details 
WHERE country = 'Germany';

--Show all songs longer than 4 minutes
SELECT * FROM song
WHERE duration > '00:04:00' ;

--Show all explicit songs
SELECT * FROM song
WHERE explicit = true;

--Show all genres having '0' in the name
SELECT * FROM genre
WHERE name LIKE '%o%';

--Show all lyrics having the word 'that'
SELECT * FROM song_lyrics
WHERE lyrics LIKE '%that%';
