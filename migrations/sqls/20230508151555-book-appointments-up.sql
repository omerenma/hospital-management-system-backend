create table book_appointments (
    id serial primary key,
    patient_id int not null,
    doctor_id int not null,
    appointment_date VARCHAR(255) not null,
    CONSTRAINT fk_patients FOREIGN KEY(patient_id) REFERENCES patients(patients_id),
    CONSTRAINT fk_doctor FOREIGN KEY(doctor_id) REFERENCES doctors(id_doctor)
)