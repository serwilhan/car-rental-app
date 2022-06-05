CREATE DATABASE car_rental;

CREATE TABLE members(
    member_id SERIAL PRIMARY KEY, 
    email VARCHAR(50),
    password VARCHAR(10)
);