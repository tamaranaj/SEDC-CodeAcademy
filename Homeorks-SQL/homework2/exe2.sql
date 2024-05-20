--Show all details from artists that have 'e' in their full name, ordered by date of birth by the oldest one to the youngest one
SELECT * FROM artist_details
WHERE full_name LIKE '%e%'
ORDER BY date_of_birth;

--Show all non-explicit songs sorted bu duration from shortest to longest
SELECT * FROM song
WHERE explicit = false
ORDER BY duration;

--Show albums that have "u" in their name sorted by rating, with worst rating on top
SELECT * FROM album
WHERE name LIKE '%u%'
ORDER BY rating;
