CREATE TABLE student (
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	date_of_birth DATE NOT NULL,
	enrolled_Date DATE NOT NULL,
	gender VARCHAR(15) NOT NULL,
	national_id_number INTEGER NOT NULL,
	student_card_number INTEGER NOT NULL
);



CREATE TABLE teacher(
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	date_of_birth DATE NOT NULL,
	academic_rank INTEGER NOT NULL,
	hire_date DATE NOT NULL
);

CREATE TABLE grade_details(
	id SERIAL PRIMARY KEY,
	grade_id INTEGER NOT NULL,
	achievement_type_id INTEGER NOT NULL,
	achievement_points INTEGER NOT NULL,
	achievement_max_points INTEGER NOT NULL,
	achievement_date DATE NOT NULL
);

CREATE TABLE course(
	id SERIAL PRIMARY KEY,
	name VARCHAR(50),
	credit INTEGER NOT NULL,
	academic_year DATE NOT NULL,
	semester VARCHAR(50)
);

CREATE TABLE grade(
	id SERIAL PRIMARY KEY,
	student_id INTEGER NOT NULL,
	course_id INTEGER NOT NULL,
	teacher_id INTEGER NOT NULL,
	grade VARCHAR(5) NOT NULL,
	comment VARCHAR(100),
	created_date DATE NOT NULL
);

CREATE TABLE achievement_type(
	id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	description VARCHAR(100),
	participation_rate SMALLINT NOT NULL
);
