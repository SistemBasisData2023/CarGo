-- Tabel Mobil
CREATE TABLE Mobil (
  id_mobil SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL CHECK (length(name) > 0),
  year INTEGER NOT NULL CHECK (year > 0),
  price NUMERIC(20, 4) NOT NULL CHECK (price > 0),
  mpg VARCHAR(10),
  transmission VARCHAR(50),
  type VARCHAR(50),
  description TEXT
  image_url TEXT
);

-- Tabel User
CREATE TABLE Users (
  id_user SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL CHECK (length(username) > 0),
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL CHECK (length(email) > 0),
  phone_no VARCHAR(20) CHECK (phone_no ~ '^[0-9]+$'),
  is_dealer BOOLEAN DEFAULT false NOT NULL,
  name VARCHAR(255),
  birth_date DATE,
  address TEXT
);

CREATE TYPE payment_status AS ENUM ('PENDING', 'WAITING PAYMENT', 'PAID', 'CANCELED');

-- Tabel Order
CREATE TABLE Orders (
  id_order SERIAL PRIMARY KEY,
  id_user INTEGER NOT NULL REFERENCES Users (id_user),
  id_mobil INTEGER NOT NULL REFERENCES Mobil (id_mobil),
  order_date DATE NOT NULL,
  shipping_date DATE NOT NULL,
  zip_code VARCHAR(10) CHECK (zip_code ~ '^[0-9]+$') NOT NULL,
  quantity INTEGER NOT NULL,
  total_payment NUMERIC(20, 4) NOT NULL CHECK (total_payment > 0),
  amount_paid NUMERIC(20, 4) DEFAULT 0 NOT NULL CHECK (amount_paid >= 0),
  status payment_status DEFAULT 'PENDING' NOT NULL
);

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
  ('user1', 'Passw0rd!', 'user1@example.com', '1234567890', false, 'User 1', '1990-01-01', 'Alamat User 1'),
  ('user2', 'Secure@123', 'user2@example.com', '9876543210', false, 'User 2', '1995-05-15', 'Alamat User 2'),
  ('user3', 'G0Od&Str0ng', 'user3@example.com', '5555555555', false, 'User 3', '1988-07-10', 'Alamat User 3'),
  ('user4', 'Ex@mpl3&123', 'user4@example.com', '1111111111', false, 'User 4', '1992-11-25', 'Alamat User 4'),
  ('user5', 'Examp1e@', 'user5@example.com', '9999999999', false, 'User 5', '1997-03-20', 'Alamat User 5'),
  ('user6', 'P@ssw0rd!123', 'user6@example.com', '4444444444', false, 'User 6', '1985-09-08', 'Alamat User 6'),
  ('user7', '1234!Abc', 'user7@example.com', '7777777777', false, 'User 7', '1993-12-12', 'Alamat User 7'),
  ('user8', '$tr0ngP@$$', 'user8@example.com', '2222222222', false, 'User 8', '1998-06-05', 'Alamat User 8'),
  ('user9', 'P@$$w0rd1', 'user9@example.com', '6666666666', false, 'User 9', '1991-04-30', 'Alamat User 9'),
  ('user10', '!nCr3d1bl3$', 'user10@example.com', '8888888888', true, 'User 10', '1996-02-18', 'Alamat User 10');

-- Entry untuk table order
INSERT INTO Orders (id_user, id_mobil, order_date, shipping_date, zip_code, quantity, total_payment, amount_paid, status)
VALUES
  (1, 1, '2021-01-01', '2021-01-02', '12345', 1, 20000, 1000, DEFAULT),
  (1, 2, '2021-01-02', '2021-01-03', '12345', 1, 18000, 3000, DEFAULT),
  (1, 3, '2021-01-03', '2021-01-04', '12345', 1, 22000, DEFAULT, DEFAULT),
  (2, 4, '2021-01-04', '2021-01-05', '12345', 1, 25000, 4000, DEFAULT),
  (2, 5, '2021-01-05', '2021-01-06', '12345', 1, 15000, DEFAULT, DEFAULT),
  (2, 6, '2021-01-06', '2021-01-07', '12345', 1, 28000, 10000, 'WAITING PAYMENT'),
  (3, 7, '2021-01-07', '2021-01-08', '12345', 1, 12000, 12000, 'PAID'),
  (3, 8, '2021-01-08', '2021-01-09', '12345', 1, 22000, 10000, 'WAITING PAYMENT'),
  (3, 9, '2021-01-09', '2021-01-10', '12345', 1, 19000, 19000, DEFAULT),
  (4, 10, '2021-01-10', '2021-01-11', '12345', 1, 30000, 30000, 'PAID');