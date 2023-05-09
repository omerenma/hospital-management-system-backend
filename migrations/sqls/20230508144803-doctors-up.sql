create table doctors (
    id_doctor int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(255) not null,
    email VARCHAR(255) not null,
    sex VARCHAR(255) not null,
    phone_no VARCHAR(255) not null,
    dob VARCHAR(255) not null,
    specialty VARCHAR(255) not null
)