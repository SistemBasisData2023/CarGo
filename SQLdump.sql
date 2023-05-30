-- Tabel Mobil
CREATE TABLE Mobil (
  id_mobil SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  year INTEGER NOT NULL,
  price NUMERIC(20, 4) NOT NULL,
  mpg VARCHAR(10),
  transmission VARCHAR(50),
  type VARCHAR(50),
  description TEXT
);

-- Tabel User
CREATE TABLE Users (
  id_user SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone_no VARCHAR(20) CHECK (phone_no ~ '^[0-9]+$'),
  is_dealer BOOLEAN DEFAULT false NOT NULL,
  name VARCHAR(255),
  birth_date DATE,
  -- age INTEGER,
  address TEXT
);

-- Tabel Order
CREATE TABLE Orders (
  id_order SERIAL PRIMARY KEY,
  id_user INTEGER REFERENCES Users (id_user),
  id_mobil INTEGER REFERENCES Mobil (id_mobil),
  order_date DATE NOT NULL,
  shipping_date DATE NOT NULL,
  zip_code VARCHAR(10) CHECK (zip_code ~ '^[0-9]+$') NOT NULL,
  quantity INTEGER NOT NULL,
  total_payment NUMERIC(20, 4) NOT NULL,
  amount_paid NUMERIC(20, 4) DEFAULT 0 NOT NULL
  -- amount_left NUMERIC(20, 4)
);

/*
-- Trigger buat update amount_left jadi dinamis / selalu berubah jika ada perubahan total_payment atau amount_paid
CREATE OR REPLACE FUNCTION update_amount_left()
RETURNS TRIGGER AS $$
BEGIN
  NEW.amount_left := NEW.total_payment - NEW.amount_paid;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_amount_left_trigger
AFTER UPDATE OF total_payment, amount_paid ON Orders
FOR EACH ROW
EXECUTE FUNCTION update_amount_left();

-- Trigger buat update age jadi dinamis / selalu berubah jika ada perubahan birth_date
CREATE OR REPLACE FUNCTION update_age()
RETURNS TRIGGER AS $$
BEGIN
  NEW.age := DATE_PART('year', age(CURRENT_DATE, NEW.birth_date));
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_age_trigger
BEFORE INSERT OR UPDATE OF birth_date ON Users
FOR EACH ROW
EXECUTE FUNCTION update_age();
*/

-- Entry untuk table mobil
INSERT INTO Mobil (name, year, price, mpg, transmission, type, description)
VALUES
  ('Mobil A', 2020, 20000, 30, 'Manual', 'Sedan', 'Deskripsi Mobil A'),
  ('Mobil B', 2018, 18000, 28, 'Manual', 'Hatchback', 'Deskripsi Mobil B'),
  ('Mobil C', 2019, 22000, 32, 'Automatic', 'SUV', 'Deskripsi Mobil C'),
  ('Mobil D', 2021, 25000, 25, 'Automatic', 'SUV', 'Deskripsi Mobil D'),
  ('Mobil E', 2017, 15000, 26, 'Manual', 'Hatchback', 'Deskripsi Mobil E'),
  ('Mobil F', 2020, 28000, 23, 'Automatic', 'Sedan', 'Deskripsi Mobil F'),
  ('Mobil G', 2016, 12000, 30, 'Manual', 'Sedan', 'Deskripsi Mobil G'),
  ('Mobil H', 2018, 22000, 29, 'Automatic', 'Hatchback', 'Deskripsi Mobil H'),
  ('Mobil I', 2019, 19000, 27, 'Manual', 'SUV', 'Deskripsi Mobil I'),
  ('Mobil J', 2022, 30000, 24, 'Automatic', 'SUV', 'Deskripsi Mobil J');

-- Entry untuk table user
INSERT INTO Users (username, password, email, phone_no, is_dealer, name, birth_date, address)
VALUES
  ('user1', 'password1', 'user1@example.com', '1234567890', false, 'User 1', '1990-01-01', 'Alamat User 1'),
  ('user2', 'password2', 'user2@example.com', '9876543210', false, 'User 2', '1995-05-15', 'Alamat User 2'),
  ('user3', 'password3', 'user3@example.com', '5555555555', false, 'User 3', '1988-07-10', 'Alamat User 3'),
  ('user4', 'password4', 'user4@example.com', '1111111111', false, 'User 4', '1992-11-25', 'Alamat User 4'),
  ('user5', 'password5', 'user5@example.com', '9999999999', false, 'User 5', '1997-03-20', 'Alamat User 5'),
  ('user6', 'password6', 'user6@example.com', '4444444444', false, 'User 6', '1985-09-08', 'Alamat User 6'),
  ('user7', 'password7', 'user7@example.com', '7777777777', false, 'User 7', '1993-12-12', 'Alamat User 7'),
  ('user8', 'password8', 'user8@example.com', '2222222222', false, 'User 8', '1998-06-05', 'Alamat User 8'),
  ('user9', 'password9', 'user9@example.com', '6666666666', false, 'User 9', '1991-04-30', 'Alamat User 9'),
  ('user10', 'password10', 'user10@example.com', '8888888888', true, 'User 10', '1996-02-18', 'Alamat User 10');

-- Entry untuk table order
INSERT INTO Orders (id_user, id_mobil, order_date, shipping_date, zip_code, quantity, total_payment, amount_paid)
VALUES
  (1, 10, '2023-01-01', '2023-01-05', '12345', 1, 20000, 10000),
  (2, 9, '2023-02-03', '2023-02-08', '54321', 2, 44000, 40000),
  (3, 8, '2023-03-05', '2023-03-10', '67890', 1, 18000, 18000),
  (4, 7, '2023-04-07', '2023-04-12', '09876', 1, 25000, 22000),
  (5, 6, '2023-05-09', '2023-05-14', '13579', 2, 56000, 50000),
  (6, 5, '2023-06-11', '2023-06-16', '24680', 1, 15000, 15000),
  (7, 4, '2023-07-13', '2023-07-18', '86420', 1, 22000, 22000),
  (8, 3, '2023-08-15', '2023-08-20', '97531', 2, 24000, 20000),
  (9, 2, '2023-09-17', '2023-09-22', '11111', 1, 19000, 18000),
  (10, 1, '2023-10-19', '2023-10-24', '22222', 1, 30000, 25000);
