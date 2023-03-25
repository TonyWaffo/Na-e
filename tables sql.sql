-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 23, 2020 at 08:48 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test du site`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `articles` varchar(200) NOT NULL,
  `stock` varchar(10) NOT NULL,
  `size` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`articles`, `stock`, `size`) VALUES
('Na\'e Tee 1.0 , couleur blanche', '5', 'S'),
('Na\'e Tee 1.0 , couleur blanche', '5', 'M'),
('Na\'e Tee 1.0 , couleur blanche', '4', 'L'),
('Na\'e Tee 1.0 , couleur blanche', '0', 'XL'),
('Na\'e Tee 1.0 , couleur blanche', '0', 'XXL'),
('Na\'e Tee 1.0 , couleur bleu', '4', 'S'),
('Na\'e Tee 1.0 , couleur bleu', '4', 'M'),
('Na\'e Tee 1.0 , couleur bleu', '6', 'L'),
('Na\'e Tee 1.0 , couleur bleu', '0', 'XL'),
('Na\'e Tee 1.0 , couleur bleu', '1', 'XXL'),
('Na\'e Tee 1.0 , couleur beige', '4', 'S'),
('Na\'e Tee 1.0 , couleur beige', '4', 'M'),
('Na\'e Tee 1.0 , couleur beige', '5', 'L'),
('Na\'e Tee 1.0 , couleur beige', '1', 'XL'),
('Na\'e Tee 1.0 , couleur beige', '1', 'XXL'),
('Na\'e Tee 2.0 , couleur blanche', '8', 'S'),
('Na\'e Tee 2.0 , couleur blanche', '7', 'M'),
('Na\'e Tee 2.0 , couleur blanche', '7', 'L'),
('Na\'e Tee 2.0 , couleur blanche', '7', 'XL'),
('Na\'e Tee 2.0 , couleur blanche', '0', 'XXL'),
('Na\'e Tee 2.0 , couleur verte', '5', 'S'),
('Na\'e Tee 2.0 , couleur verte', '3', 'M'),
('Na\'e Tee 2.0 , couleur verte', '7', 'L'),
('Na\'e Tee 2.0 , couleur verte', '1', 'XL'),
('Na\'e Tee 2.0 , couleur verte', '0', 'XXL'),
('Na\'e Tee 2.0 , couleur bleu', '4', 'S'),
('Na\'e Tee 2.0 , couleur bleu', '5', 'M'),
('Na\'e Tee 2.0 , couleur bleu', '5', 'L'),
('Na\'e Tee 2.0 , couleur bleu', '1', 'XL'),
('Na\'e Tee 2.0 , couleur bleu', '0', 'XXL'),
('Na\'e Tee 3.0 , couleur blanche', '0', 'S'),
('Na\'e Tee 3.0 , couleur blanche', '0', 'M'),
('Na\'e Tee 3.0 , couleur blanche', '0', 'L'),
('Na\'e Tee 3.0 , couleur blanche', '0', 'XL'),
('Na\'e Tee 3.0 , couleur blanche', '0', 'XXL'),
('Na\'e Tee 3.0 , couleur beige', '1', 'S'),
('Na\'e Tee 3.0 , couleur beige', '1', 'M'),
('Na\'e Tee 3.0 , couleur beige', '5', 'L'),
('Na\'e Tee 3.0 , couleur beige', '0', 'XL'),
('Na\'e Tee 3.0 , couleur beige', '0', 'XXL'),
('Na\'e Over - Men , couleur blanche', '0', 'S'),
('Na\'e Over - Men , couleur blanche', '0', 'M'),
('Na\'e Over - Men , couleur blanche', '2', 'L'),
('Na\'e Over - Men , couleur blanche', '2', 'XL'),
('Na\'e Over - Men , couleur blanche', '0', 'XXL'),
('Na\'e Over - Men , couleur grise', '0', 'S'),
('Na\'e Over - Men , couleur grise', '6', 'M'),
('Na\'e Over - Men , couleur grise', '0', 'L'),
('Na\'e Over - Men , couleur grise', '0', 'XL'),
('Na\'e Over - Men , couleur grise', '2', 'XXL'),
('Na\'e Tee Classic , couleur orange', '5', 'S'),
('Na\'e Tee Classic , couleur orange', '5', 'M'),
('Na\'e Tee Classic , couleur orange', '6', 'L'),
('Na\'e Tee Classic , couleur orange', '1', 'XL'),
('Na\'e Tee Classic , couleur orange', '1', 'XXL'),
('Na\'e Tee Classic , couleur bordeaux', '5', 'S'),
('Na\'e Tee Classic , couleur bordeaux', '5', 'M'),
('Na\'e Tee Classic , couleur bordeaux', '6', 'L'),
('Na\'e Tee Classic , couleur bordeaux', '1', 'XL'),
('Na\'e Tee Classic , couleur bordeaux', '1', 'XXL'),
('Na\'e Tee Classic , couleur verte', '5', 'S'),
('Na\'e Tee Classic , couleur verte', '5', 'M'),
('Na\'e Tee Classic , couleur verte', '6', 'L'),
('Na\'e Tee Classic , couleur verte', '1', 'XL'),
('Na\'e Tee Classic , couleur verte', '1', 'XXL'),
('Na\'e Tee Classic , couleur bleu', '5', 'S'),
('Na\'e Tee Classic , couleur bleu', '5', 'M'),
('Na\'e Tee Classic , couleur bleu', '5', 'L'),
('Na\'e Tee Classic , couleur bleu', '1', 'XL'),
('Na\'e Tee Classic , couleur bleu', '1', 'XXL'),
('Na\'e Tee Classic , couleur blanche', '6', 'S'),
('Na\'e Tee Classic , couleur blanche', '4', 'M'),
('Na\'e Tee Classic , couleur blanche', '6', 'L'),
('Na\'e Tee Classic , couleur blanche', '1', 'XL'),
('Na\'e Tee Classic , couleur blanche', '1', 'XXL'),
('Na\'e Tee Classic , couleur rouge', '5', 'S'),
('Na\'e Tee Classic , couleur rouge', '5', 'M'),
('Na\'e Tee Classic , couleur rouge', '6', 'L'),
('Na\'e Tee Classic , couleur rouge', '1', 'XL'),
('Na\'e Tee Classic , couleur rouge', '1', 'XXL'),
('Na\'e Over - Women , couleur blanche', '0', 'S'),
('Na\'e Over - Women , couleur blanche', '0', 'M'),
('Na\'e Over - Women , couleur blanche', '3', 'L'),
('Na\'e Over - Women , couleur blanche', '1', 'XL'),
('Na\'e Over - Women , couleur blanche', '1', 'XXL'),
('Na\'e Over - Women , couleur grise', '0', 'S'),
('Na\'e Over - Women , couleur grise', '3', 'M'),
('Na\'e Over - Women , couleur grise', '5', 'L'),
('Na\'e Over - Women , couleur grise', '0', 'XL'),
('Na\'e Over - Women , couleur grise', '3', 'XXL'),
('Na\'e Tee 2.0 , couleur beige', '3', 'S'),
('Na\'e Tee 2.0 , couleur beige', '1', 'M'),
('Na\'e Tee 2.0 , couleur beige', '0', 'L'),
('Na\'e Tee 2.0 , couleur beige', '0', 'XL'),
('Na\'e Tee 2.0 , couleur beige', '0', 'XXL');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `name` varchar(100) NOT NULL,
  `surname` varchar(200) NOT NULL,
  `mail` varchar(100) NOT NULL,
  `phone` int(100) NOT NULL,
  `location` varchar(200) DEFAULT NULL,
  `articles` longtext DEFAULT NULL,
  `deliveryFee` varchar(100) DEFAULT NULL,
  `withdrawalFee` varchar(100) DEFAULT NULL,
  `total` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
