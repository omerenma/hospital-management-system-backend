CREATE TABLE patients (
    id serial primary key,
    name VARCHAR(225) NOT NULL,
    residential_address VARCHAR(225) NOT NULL,
    room_admitted VARCHAR(225) NOT NULL,
    admission_no VARCHAR(225) NOT NULL,
    id_no int NOT NULL,
    email VARCHAR(225) NOT NULL,
    phone_no VARCHAR(225) NOT NULL,
    next_of_kin_name VARCHAR(225) NOT NULL,
    next_of_kin_phone_no VARCHAR(225) not NULL,
    issent int DEFAULT 0 NOT NULL,
    status VARCHAR(200) DEFAULT 'unknown' NOT NULL
    
)