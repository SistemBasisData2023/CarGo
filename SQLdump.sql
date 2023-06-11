--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: CarGo; Type: DATABASE; Schema: -; Owner: juanjonathan67
--

CREATE DATABASE "CarGo" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'C';


ALTER DATABASE "CarGo" OWNER TO juanjonathan67;

\connect "CarGo"

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: payment_status; Type: TYPE; Schema: public; Owner: juanjonathan67
--

CREATE TYPE public.payment_status AS ENUM (
    'PENDING',
    'WAITING PAYMENT',
    'PAID',
    'CANCELED',
    'ACCEPTED'
);


ALTER TYPE public.payment_status OWNER TO juanjonathan67;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: mobil; Type: TABLE; Schema: public; Owner: juanjonathan67
--

CREATE TABLE public.mobil (
    id_mobil integer NOT NULL,
    name character varying(255) NOT NULL,
    year integer NOT NULL,
    price numeric(20,4) NOT NULL,
    mpg character varying(10),
    transmission character varying(50),
    type character varying(50),
    description text,
    image_url text,
    CONSTRAINT mobil_name_check CHECK ((length((name)::text) > 0)),
    CONSTRAINT mobil_price_check CHECK ((price > (0)::numeric)),
    CONSTRAINT mobil_year_check CHECK ((year > 0))
);


ALTER TABLE public.mobil OWNER TO juanjonathan67;

--
-- Name: mobil_id_mobil_seq; Type: SEQUENCE; Schema: public; Owner: juanjonathan67
--

CREATE SEQUENCE public.mobil_id_mobil_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.mobil_id_mobil_seq OWNER TO juanjonathan67;

--
-- Name: mobil_id_mobil_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: juanjonathan67
--

ALTER SEQUENCE public.mobil_id_mobil_seq OWNED BY public.mobil.id_mobil;


--
-- Name: orders; Type: TABLE; Schema: public; Owner: juanjonathan67
--

CREATE TABLE public.orders (
    id_order integer NOT NULL,
    id_user integer NOT NULL,
    id_mobil integer NOT NULL,
    order_date date NOT NULL,
    shipping_date date NOT NULL,
    zip_code character varying(10) NOT NULL,
    quantity integer NOT NULL,
    total_payment numeric(20,4) NOT NULL,
    amount_paid numeric(20,4) DEFAULT 0 NOT NULL,
    status public.payment_status DEFAULT 'PENDING'::public.payment_status NOT NULL,
    CONSTRAINT orders_amount_paid_check CHECK ((amount_paid >= (0)::numeric)),
    CONSTRAINT orders_total_payment_check CHECK ((total_payment > (0)::numeric)),
    CONSTRAINT orders_zip_code_check CHECK (((zip_code)::text ~ '^[0-9]+$'::text))
);


ALTER TABLE public.orders OWNER TO juanjonathan67;

--
-- Name: orders_id_order_seq; Type: SEQUENCE; Schema: public; Owner: juanjonathan67
--

CREATE SEQUENCE public.orders_id_order_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orders_id_order_seq OWNER TO juanjonathan67;

--
-- Name: orders_id_order_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: juanjonathan67
--

ALTER SEQUENCE public.orders_id_order_seq OWNED BY public.orders.id_order;


--
-- Name: users; Type: TABLE; Schema: public; Owner: juanjonathan67
--

CREATE TABLE public.users (
    id_user integer NOT NULL,
    username character varying(50) NOT NULL,
    password character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    phone_no character varying(20),
    is_dealer boolean DEFAULT false NOT NULL,
    name character varying(255),
    birth_date date,
    address text,
    CONSTRAINT users_email_check CHECK ((length((email)::text) > 0)),
    CONSTRAINT users_phone_no_check CHECK (((phone_no)::text ~ '^[0-9]+$'::text)),
    CONSTRAINT users_username_check CHECK ((length((username)::text) > 0))
);


ALTER TABLE public.users OWNER TO juanjonathan67;

--
-- Name: users_id_user_seq; Type: SEQUENCE; Schema: public; Owner: juanjonathan67
--

CREATE SEQUENCE public.users_id_user_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_user_seq OWNER TO juanjonathan67;

--
-- Name: users_id_user_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: juanjonathan67
--

ALTER SEQUENCE public.users_id_user_seq OWNED BY public.users.id_user;


--
-- Name: mobil id_mobil; Type: DEFAULT; Schema: public; Owner: juanjonathan67
--

ALTER TABLE ONLY public.mobil ALTER COLUMN id_mobil SET DEFAULT nextval('public.mobil_id_mobil_seq'::regclass);


--
-- Name: orders id_order; Type: DEFAULT; Schema: public; Owner: juanjonathan67
--

ALTER TABLE ONLY public.orders ALTER COLUMN id_order SET DEFAULT nextval('public.orders_id_order_seq'::regclass);


--
-- Name: users id_user; Type: DEFAULT; Schema: public; Owner: juanjonathan67
--

ALTER TABLE ONLY public.users ALTER COLUMN id_user SET DEFAULT nextval('public.users_id_user_seq'::regclass);


--
-- Data for Name: mobil; Type: TABLE DATA; Schema: public; Owner: juanjonathan67
--

COPY public.mobil (id_mobil, name, year, price, mpg, transmission, type, description, image_url) FROM stdin;
2	CarGo© Corolla	2023	800.0000	32	Manual	Sedan	CarGo© Corolla is a popular compact car that has gained a reputation for its reliability, fuel efficiency, and practicality. It is known for its long-standing presence in the automotive market and its ability to cater to a wide range of drivers.	https://www.toyota.com/imgix/content/dam/toyota/lifestyle/relative/2023/corollahybrid/COH_MY23_0005_V001.png?fm=webp&q=90&w=768
3	CarGo© Prius	2021	504.0000	48	Automatic	EV	CarGo© Prius stands out as a leading hybrid vehicle known for its exceptional fuel efficiency, eco-friendly technology, and practicality. Its unique exterior design, comfortable interior, advanced technology features, and commitment to safety make it a popular choice for those seeking a hybrid electric vehicle.	https://www.toyota.com/imgix/content/dam/toyota/lifestyle/relative/2023/priusprime/PRP_MY23_0016_V001.png?fm=webp&q=90&w=768
4	CarGo© Crown	2022	2200.0000	42	Automatic	Sedan	CarGo© Crown is a luxury sedan that combines refined design, advanced technology, and a focus on comfort and safety. It offers a premium driving experience and is well-suited for those who seek a high-end, feature-rich vehicle with a touch of elegance and sophistication.	https://www.toyota.com/imgix/content/dam/toyota/lifestyle/relative/2023/toyotacrown/CRW_MY23_0004_V003.png?fm=webp&q=90&w=768
5	CarGo© GR Corolla	2022	1100.0000	21	Manual	Minivan	CarGo© GR Corolla is a sportier and more performance-focused version of the popular Corolla model. It combines enhanced power, dynamic styling, and sport-tuned components to provide a thrilling driving experience for enthusiasts who desire a more spirited ride.	https://www.toyota.com/imgix/content/dam/toyota/lifestyle/relative/2023/grcorolla/GRC_MY23_0129_V001.png?fm=webp&q=90&w=768
6	CarGo© Camry	2020	1500.0000	28	Automatic	Sedan	CarGo© Camry is a reliable, comfortable, and practical mid-size sedan that offers a well-rounded package. Its sleek design, comfortable interior, advanced technology features, and commitment to safety make it a popular choice for families and individuals seeking a dependable and versatile sedan.	https://www.toyota.com/imgix/content/dam/toyota/lifestyle/relative/2023/camry/CAH_MY22_0003_V001.png?fm=webp&q=90&w=768
7	CarGo© Mirai	2022	789.0000	76	Automatic	EV	CarGo© Mirai represents a cutting-edge approach to zero-emission transportation through its hydrogen fuel cell technology. It offers a stylish design, comfortable interior, and a clean driving experience while contributing to reducing greenhouse gas emissions and promoting sustainable mobility.	https://www.toyota.com/imgix/content/dam/toyota/lifestyle/relative/2023/mirai/MIR_MY21_0048_V003_u36AblgnPAA_i23l.png?fm=webp&q=90&w=768
9	CarGo© Supra	2022	2000.0000	25	Manual	Supercar	CarGo© Supra is a legendary sports car that offers exhilarating performance, head-turning design, and an engaging driving experience. Its iconic status, combined with cutting-edge technology and a driver-focused interior, make the Supra a desirable choice for those seeking a high-performance sports car that delivers both excitement and style.	https://www.toyota.com/imgix/content/dam/toyota/lifestyle/relative/2023/grsupra/supra_23.png?fm=webp&q=90&w=768
8	CarGo© GR86	2022	1800.0000	20	Manual	Supercar	CarGo© GR86 represents an exciting sports car that prioritizes driving pleasure and performance. Its sporty exterior, driver-focused interior, engaging performance, and precise handling make it an appealing choice for those seeking an affordable and fun-to-drive sports car.	https://www.toyota.com/imgix/content/dam/toyota/lifestyle/relative/2023/gr86/G86_global.png?fm=webp&q=90&w=768
10	CarGo© Sienna	2023	900.0000	36	Manual	Minivan	CarGo© Sienna is a spacious and practical minivan that provides a comfortable and convenient driving experience. Its versatile interior, family-friendly features, and commitment to safety make it a popular choice for families and individuals who value space, comfort, and functionality in their vehicles.	https://www.toyota.com/imgix/content/dam/toyota/lifestyle/relative/2022/sienna/minivan-sienna-1.png?fm=webp&q=90&w=768
11	CarGo© Highlander	2023	1200.0000	36	Hybrid	SUV	CarGo© Highlander is a versatile and reliable SUV that offers ample space, comfort, and a range of features to meet the needs of families and individuals. Its stylish design, comfortable interior, advanced technology, and commitment to safety make it a popular choice in the mid-size SUV segment.	https://www.toyota.com/imgix/content/dam/toyota/lifestyle/relative/2023/highlanderhybrid/HLH_MY23_0002_V001.png?fm=webp&q=90&w=768
12	CarGo© Sequoia	2022	859.0000	21	Automatic	SUV	CarGo© Sequoia is a full-size SUV that offers a spacious interior, powerful performance, and rugged capabilities. It is designed to accommodate large families and provide a comfortable and versatile driving experience. The Sequoia features a bold and robust exterior design, a well-appointed interior with seating for up to eight passengers, and ample cargo space.	https://www.toyota.com/imgix/content/dam/toyota/lifestyle/relative/2023/sequoia/SEQ_MY23_0041_V001.png?fm=webp&q=90&w=768
13	CarGo© Venza	2023	650.0000	40	Manual	SUV	CarGo© Venza is a mid-size crossover SUV that offers a stylish design, a comfortable interior, and advanced technology features. It is designed to provide a refined and efficient driving experience for individuals and families. The Venza features a sleek and modern exterior, with a distinctive grille, sleek headlights, and smooth lines. Inside, it offers seating for up to five passengers and a spacious and well-appointed cabin	https://www.toyota.com/imgix/content/dam/toyota/lifestyle/relative/2023/venza/VEN_MY23_0001_V002_f77lPmzJ.png?fm=webp&q=90&w=768
14	CarGo© bZ4X	2023	1600.0000	42	Automatic	EV	CarGo© bZ4X is an upcoming all-electric SUV that is part of Toyota's "bZ" (Beyond Zero) lineup. It features a modern and futuristic exterior design and a spacious and technology-rich interior. As an all-electric vehicle, it will offer zero-emission driving, prioritizing environmental performance. The bZ4X is expected to have all-wheel drive capability, providing enhanced traction and stability.	https://www.toyota.com/imgix/content/dam/toyota/lifestyle/relative/2022/bz4x/suv-bz4x-1.png?fm=webp&q=90&w=768
15	CarGo© Hatchback	2020	548.0000	32	Manual	Minivan	CarGo© Corolla Hatchback is a stylish and practical compact car that combines fuel efficiency, modern features, and an enjoyable driving experience. It appeals to individuals and small families looking for a reliable and versatile vehicle that doesn't compromise on style or performance.	https://www.toyota.com/imgix/content/dam/toyota/lifestyle/relative/2023/corollahatchback/CHB_MY22_0010_v001.png?fm=webp&q=90&w=768
16	CarGo© Lucid	2023	1345.0000	131	Automatic	EV	CarGo© Lucid Air is a high-performance luxury electric sedan that combines elegant design, advanced technology, and sustainable driving. It aims to provide a refined and exhilarating driving experience while offering the benefits of electric mobility.	https://images-live.lucid.zlthunder.net/china_rock/lucid/air/2020/1ea518aa6f5712d0/26b1577a2ebbc285bfd4f1cf93df9ffda27718f0_1920x1080.jpg
17	CarGo© 812 GTS	2022	5190.0000	12	Manual	Supercar	CarGo© 812 GTS is a high-performance convertible sports car that combines breathtaking design, exhilarating performance, and the joy of open-top driving. It offers an unforgettable experience for those seeking a blend of luxury, speed, and the excitement of driving a powerful V12.	https://cdn.ferrari.com/cms/network/media/img/resize/6241d7843a5d611893a91ca5-d-812gts-dynamic-speedsize1?width=1920&amp;height=1080&quot;);
18	CarGo© Jesko	2021	9800.0000	13	Manual	Supercar	CarGo© Jesko is a pinnacle of automotive engineering and represents the pursuit of extreme performance and aerodynamics. It is a highly exclusive hypercar that combines breathtaking design, unparalleled power, and advanced technology to create a truly exceptional driving experience.	https://mainwebstorage.blob.core.windows.net/mediacontainers/styles/autox720/azure/2022-04/Pre-series%20Jesko%201.jpg?itok=IlUJvQkV
19	CarGo© R1T	2022	660.0000	25	Automatic	EV	CarGo© R1T is an all-electric pickup truck that combines ruggedness, advanced technology, and sustainable performance. It aims to provide an electric alternative in the pickup truck segment, offering versatility, capability, and zero-emission driving.	https://media.rivian.com/rivian-main/image/upload/f_auto,q_auto/v1/rivian-com/r1t/Hero_-_Desktop_mpjmqe
21	CarGo© Avant	2021	1090.0000	52	Automatic	Minivan	CarGo© Avant combines the best of both worlds - the performance of a sports car and the practicality of a wagon. It offers a thrilling driving experience, luxurious interior, and increased cargo space, making it an appealing choice for those seeking a high-performance vehicle without compromising on versatility and everyday usability.	https://www.audi.co.id/content/dam/nemo/models/a4/rs-4-avant/my-2021/_update/1920x1080-gallery/1920x1080-audi-rs4-avant-my2021-1505.jpg?imwidth=1080
22	CarGo© Cayenne	2023	3120.0000	15	Automatic	SUV	CarGo© Cayenne is a luxury SUV that combines sportiness, comfort, and versatility. It offers powerful performance, sophisticated design, and a range of advanced features. The Cayenne caters to drivers who desire a premium SUV with the driving dynamics and refinement expected from a Porsche.	https://files.porsche.com/filestore/image/multimedia/none/e3-2nd-cayenne-coupe-highlights-01/normal/63d2c5ca-d21d-11ed-80ff-005056bbdc38;sN;twebp;c1697;gc/porsche-normal.webp
23	CarGo© Mach-E	2022	756.0000	90	Automatic	EV	CarGo© Mach-E represents an exciting foray into the world of electric vehicles for CarGo. It combines the Mustang's iconic styling cues with the benefits of electric power, offering performance, style, and sustainability. The Mach-E is designed to appeal to those seeking an all-electric SUV with the sporty heritage of the Mustang brand.	https://cdn.motor1.com/images/mgl/Y1Xxw/s3/2021-ford-mustang-mach-e.jpg
20	CarGo© RS 5	2022	2920.0000	18	Automatic	Sedan	CarGo© RS 5 is a high-performance sports coupe or sportback that combines striking design, powerful performance, and advanced technology. It offers a thrilling driving experience while providing the luxury and comfort expected from an CarGo vehicle. The RS 5 is designed for those seeking a blend of performance, style, and everyday practicality.	https://cdn.motor1.com/images/mgl/mpK3v/s1/audi-rs5-sportback-walkaround-lead.jpg
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: juanjonathan67
--

COPY public.orders (id_order, id_user, id_mobil, order_date, shipping_date, zip_code, quantity, total_payment, amount_paid, status) FROM stdin;
16	38	3	2023-06-11	2023-06-18	16411	1	504.0000	252.0000	WAITING PAYMENT
4	7	2	2023-10-09	2023-10-10	10005	1	10000.0000	10000.0000	PAID
18	7	9	2023-06-11	2023-06-18	211892	2	4000.0000	4000.0000	PAID
6	8	6	2023-10-10	2023-10-11	10045	1	15000.0000	5000.0000	ACCEPTED
15	38	3	2023-06-11	2023-06-18	1231321	1	504.0000	0.0000	ACCEPTED
19	7	9	2023-06-11	2023-06-18	10924	1	2000.0000	1000.0000	WAITING PAYMENT
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: juanjonathan67
--

COPY public.users (id_user, username, password, email, phone_no, is_dealer, name, birth_date, address) FROM stdin;
8	user3	$2b$10$wptgP4hE5F3eieF6VSPzsO/Q0vkAqq0VCpLy3cgqMTMf0e42IID1y	user3@example.com	9876543222	f	\N	\N	\N
12	Jonathan Juan	$2b$10$Ts5qNMJgzPDy.Nd4f/MpueUZvQO5MZwV4e7tU.kt8INQ1R8WOhVYK	jonathanjuan67@gmail.com	123456789	f	\N	\N	\N
18	juanjonathan68	$2b$10$lyrOBdDdTUnNF2tq2exhk.4/27yA1GhuD3WWR2WpG7k43G1NXrhKq	juan.jonathan@gmail.com	8162412423	f	Juan Jonathan	2003-10-21	Kemayoran, Jakarta Pusat
19	juanjonathan69	$2b$10$88t.3.3HSXB86KTS0P8.1uLDn4Hlm0a3OYVxXZt57nsUfZmiI/pzW	juanjonathan69@gmail.com	087883022558	f	Juan Jonathan	2003-10-20	Kemayoran, Jakarta Pusat
21	juanjonathan70	$2b$10$EQVbfz4hoQipOu.Ifl6V4.08mh9D/1P.Z1VGvX86bAiuuGwQ2FY.O	juanjonathan70@gmail.com	12412312412	f	Juan Jonathan	2023-06-14	LALALA
24	juanjonathan71	$2b$10$C2Z8A6hrXbjF5J8OM.ODLOj0Ln2uahqnWiBeHaIFRUQh4YTjhwlZm	juanjonathan71@gmail.com	1287912412	f	Juan Jonathan	2023-06-08	LILILILI
38	Eriqo	$2b$10$BeYKebOkYqHy/fQnwGyF6OdUCp3W755GmDo9bYMGZsu/cFvHe9IHO	eriqo@gmail.com	08111222333	f	Eriqo Arief Wicaksono	2019-06-03	Street Number 1, Depok
39	juanjonathan100	$2b$10$FBUfY2VzoTac2sBaDoAr8Ou4bhS9CDiQP3enNBFs7Zz1hblKgUrZy	juanjonathan100@gmail.com	12412512312	f	Juan Jonathan	2022-06-21	asdasdasdda
40	juanjonathan101	$2b$10$F2YaHwdZCGwPCqMndNQZauZCc7AnBwCSQywABHB0SKW/4X5U9xdQ6	juanjonathan101@gmail.com	12648162312	f	Juan Jonathan 101	2023-05-16	asdasdasdsadasdasd
13	juanjonathan67	$2b$10$NZCcGeWh8XD1.NPy2Wt14O5gRX0gmxme9x1PsT/5/SdcoIjKzdsbW	juanjonathan67@gmail.com	087883022558	t	Juan Jonathan	2003-10-20	Kemayoran, Jakarta Pusat
7	user2	$2b$10$VCXOZ3tTu1GJaTIiRlsqYeBly5FQGbwVaz4i/1v8BtbmZFSTfORDa	user2@example.com	91827912	f	YES BISA	2023-06-13	JALAN BOULEVARD
37	juanjonathan75	$2b$10$SUYHR6T21siTMpwEQIQfZ.6IBex2z.g2bGksduc2NANKOV4lHJ9a2	juanjonathan75@gmail.com	123124	t	asdas	2023-06-20	asdasda
\.


--
-- Name: mobil_id_mobil_seq; Type: SEQUENCE SET; Schema: public; Owner: juanjonathan67
--

SELECT pg_catalog.setval('public.mobil_id_mobil_seq', 34, true);


--
-- Name: orders_id_order_seq; Type: SEQUENCE SET; Schema: public; Owner: juanjonathan67
--

SELECT pg_catalog.setval('public.orders_id_order_seq', 19, true);


--
-- Name: users_id_user_seq; Type: SEQUENCE SET; Schema: public; Owner: juanjonathan67
--

SELECT pg_catalog.setval('public.users_id_user_seq', 40, true);


--
-- Name: mobil mobil_pkey; Type: CONSTRAINT; Schema: public; Owner: juanjonathan67
--

ALTER TABLE ONLY public.mobil
    ADD CONSTRAINT mobil_pkey PRIMARY KEY (id_mobil);


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: juanjonathan67
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id_order);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: juanjonathan67
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: juanjonathan67
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id_user);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: juanjonathan67
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- Name: orders orders_id_mobil_fkey; Type: FK CONSTRAINT; Schema: public; Owner: juanjonathan67
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_id_mobil_fkey FOREIGN KEY (id_mobil) REFERENCES public.mobil(id_mobil);


--
-- Name: orders orders_id_user_fkey; Type: FK CONSTRAINT; Schema: public; Owner: juanjonathan67
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_id_user_fkey FOREIGN KEY (id_user) REFERENCES public.users(id_user);


--
-- PostgreSQL database dump complete
--

