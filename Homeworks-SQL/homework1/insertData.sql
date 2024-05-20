INSERT INTO student (first_name, last_name, date_of_birth, enrolled_Date, gender, national_id_number, student_card_number)
VALUES
('Tamara', 'Najdovska', '26/02/1996', '15.10.2023', 'female', 34343, 43434),
('John', 'Benji', '04/05/1994', '15/10/2022', 'male', 6606, 809090);


INSERT INTO teacher (first_name, last_name, date_of_birth, academic_rank, hire_date)
VALUES
('Mary', 'Joe', '20/05/1987', '20','01/07/2020' );


INSERT INTO grade_details (grade_id, achievement_type_id, achievement_points, achievement_max_points, achievement_date)
VALUES 
('233', '334','789','100', '15/05/2024');

INSERT INTO course(name, credit, academic_year, semester)
VALUES
('SQL Databases', '50', '01/01/2024', 'second');

INSERT INTO grade (student_id, course_id, teacher_id, grade, created_date)
VALUES
('1', '1', '1', 'A','15/05/2024');

INSERT INTO achievement_type (name, description, participation_rate)
VALUES
('Kudos', 'Implementing big logic solutions', '1')