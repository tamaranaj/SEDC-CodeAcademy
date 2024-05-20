--List all artist names and artist full names without duplicates
SELECT full_name FROM artist_details 
UNION 
SELECT name FROM artist;


--List all artist names and artist full names with duplicates
SELECT full_name FROM artist_details 
UNION ALL
SELECT name FROM artist;

--List all common artist names and artist full names
SELECT full_name FROM artist_details 
INTERSECT
SELECT name FROM artist;
