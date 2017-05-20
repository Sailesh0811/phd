-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 07, 2016 at 08:24 AM
-- Server version: 5.6.17-log
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `phd`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `designation` varchar(255) NOT NULL,
  `edu` text NOT NULL,
  `area_interest` longtext NOT NULL,
  `school` varchar(255) NOT NULL,
  `time_stamp` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `name`, `email`, `password`, `designation`, `edu`, `area_interest`, `school`, `time_stamp`) VALUES
(1, 'vjvjvjgvgjv', 'ngs@gmail.com', 'sai12345', 'DEAN', 'bkkhbkb', 'bkbhkbkbkhb', 'SOC', '13-10-16 09:10:07');

-- --------------------------------------------------------

--
-- Table structure for table `canditate`
--

CREATE TABLE IF NOT EXISTS `canditate` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mobile_number` varchar(12) NOT NULL,
  `address` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL DEFAULT 'sastra123',
  `designation` varchar(255) NOT NULL,
  `ug` varchar(255) NOT NULL,
  `under_course` varchar(255) NOT NULL,
  `under_year` varchar(255) NOT NULL,
  `pg` varchar(255) NOT NULL,
  `pg_course` varchar(255) NOT NULL,
  `pg_year` varchar(255) NOT NULL,
  `area_interest` varchar(255) NOT NULL,
  `school` varchar(255) NOT NULL,
  `time_stamp` varchar(255) NOT NULL,
  `supervisor_email` varchar(255) NOT NULL,
  `approve` int(2) NOT NULL,
  `upload` int(2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=27 ;

--
-- Dumping data for table `canditate`
--

INSERT INTO `canditate` (`id`, `name`, `email`, `mobile_number`, `address`, `password`, `designation`, `ug`, `under_course`, `under_year`, `pg`, `pg_course`, `pg_year`, `area_interest`, `school`, `time_stamp`, `supervisor_email`, `approve`, `upload`) VALUES
(26, 'G Shailesh Dheep', 'ngsaileshsaran@gmail.com', '7373238980', '60,Maragatham Gardens', 'sastra123', 'Student', 'B.E', 'Computer Science', '2014', 'M.E', 'Computer', '2016', 'Cloud', 'SOC', '17-10-16 07:10:24', 'ngsaileshsaran@gmail.com', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE IF NOT EXISTS `comments` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `to_email` varchar(255) NOT NULL,
  `from_email` varchar(255) NOT NULL,
  `time_stamp` varchar(255) NOT NULL,
  `message` mediumtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=24 ;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `to_email`, `from_email`, `time_stamp`, `message`) VALUES
(1, 'ngsaileshsaran@gmail.com', 'ngsaileshsaran@gmail.com', '13-10-16 01:10:43', 'mk;mk;'),
(2, 'ngsaileshsaran@gmail.com', 'ngsaileshsaran@gmail.com', '13-10-16 01:10:57', 'bhbhbh'),
(3, 'ngsaileshsaran@gmail.com', 'ngsaileshsaran@gmail.com', '13-10-16 01:10:55', 'bhbhbhbjb jb'),
(4, 'ngsaileshsaran@gmail.com', 'ngsaileshsaran@gmail.com', '13-10-16 02:10:15', 'vhbhvhvh'),
(5, 'ngsaileshsaran@gmail.com', 'ngsaileshsaran@gmail.com', '13-10-16 03:10:34', 'buhbhb'),
(6, 'ngsaileshsaran@gmail.com', 'ng@gmail.com', '13-10-16 09:10:35', 'hi'),
(7, 'ngsaileshsaran@gmail.com', 'ngs@gmail.com', '13-10-16 09:10:10', 'bsd'),
(15, 'harshithmullapudi@gmail.com', 'ngs@gmail.com', '13-10-16 10:10:24', ''),
(16, 'harshithmullapudi@gmail.com', 'ngs@gmail.com', '13-10-16 10:10:27', ''),
(17, 'harshithmullapudi@gmail.com', 'ngs@gmail.com', '13-10-16 10:10:51', 'hi'),
(18, 'harshithmullapudi@gmail.com', 'ngs@gmail.com', '13-10-16 10:10:06', 'hidf'),
(19, 'ngsaileshsaran@gmail.com', 'ngsaileshsaran@gmail.com', '14-10-16 09:10:59', ''),
(20, 'harshithmullapudi@gmail.com', 'ngsaileshsaran@gmail.com', '14-10-16 09:10:11', 'sasa'),
(21, 'harshithmullapudi@gmail.com', 'ngs@gmail.com', '14-10-16 01:10:49', 'addsadaf'),
(22, 'ngsaileshsaran@gmail.com', 'ngsaileshsaran@gmail.com', '14-10-16 03:10:42', 'fadfaf'),
(23, 'ngsaileshsaran@gmail.com', 'ngsaileshsaran@gmail.com', '14-10-16 03:10:53', 'bibhhhi');

-- --------------------------------------------------------

--
-- Table structure for table `meeting`
--

CREATE TABLE IF NOT EXISTS `meeting` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `candidate_email` varchar(255) NOT NULL,
  `supervisor_email` varchar(255) NOT NULL,
  `internal_1` varchar(255) NOT NULL,
  `internal_2` varchar(255) NOT NULL,
  `external_1` varchar(255) NOT NULL,
  `external_2` varchar(255) NOT NULL,
  `meeting_date` varchar(255) NOT NULL,
  `time_stamp` varchar(255) NOT NULL,
  `approve` int(22) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `meeting`
--

INSERT INTO `meeting` (`id`, `candidate_email`, `supervisor_email`, `internal_1`, `internal_2`, `external_1`, `external_2`, `meeting_date`, `time_stamp`, `approve`) VALUES
(6, 'ngsaileshsaran@gmail.com', 'ngsaileshsaran@gmail.com', 'n kjnk', 'uvbu', 'yvug', 'vy', '15 October, 2016', '14-10-16 03:10:43', 1);

-- --------------------------------------------------------

--
-- Table structure for table `school`
--

CREATE TABLE IF NOT EXISTS `school` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `designation` varchar(255) NOT NULL,
  `edu` text NOT NULL,
  `area_interest` longtext NOT NULL,
  `school` varchar(255) NOT NULL,
  `time_stamp` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `school`
--

INSERT INTO `school` (`id`, `name`, `email`, `password`, `designation`, `edu`, `area_interest`, `school`, `time_stamp`) VALUES
(1, 'njnjskdnkadnksjn', 'ng@gmail.com', 'sai12345', 'AD', 'dsadasasd', 'sdddda', 'SOC', '13-10-16 08:10:09');

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

CREATE TABLE IF NOT EXISTS `staff` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `designation` varchar(255) NOT NULL,
  `edu` text NOT NULL,
  `area_interest` longtext NOT NULL,
  `school` varchar(255) NOT NULL,
  `time_stamp` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `staff`
--

INSERT INTO `staff` (`id`, `name`, `email`, `password`, `designation`, `edu`, `area_interest`, `school`, `time_stamp`) VALUES
(1, 'hkkbkhbkh', 'ngsaileshsaran@gmail.com', 'sai12345', 'AP-1', 'dadadadsa', 'daadasda', 'SOC', '13-10-16 11:10:39');

-- --------------------------------------------------------

--
-- Table structure for table `staffcourse`
--

CREATE TABLE IF NOT EXISTS `staffcourse` (
  `id` int(15) NOT NULL AUTO_INCREMENT,
  `candidate_email` varchar(255) NOT NULL,
  `staff_email` varchar(255) NOT NULL,
  `subject1` varchar(30) NOT NULL,
  `subject2` varchar(30) NOT NULL,
  `subject3` varchar(30) NOT NULL,
  `subject4` varchar(30) NOT NULL,
  `subject5` varchar(30) NOT NULL,
  `subject6` varchar(30) NOT NULL,
  `upload` int(2) NOT NULL,
  `approve` int(2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `staffcourse`
--

INSERT INTO `staffcourse` (`id`, `candidate_email`, `staff_email`, `subject1`, `subject2`, `subject3`, `subject4`, `subject5`, `subject6`, `upload`, `approve`) VALUES
(5, 'ngsaileshsaran@gmail.com', 'ngsaileshsaran@gmail.com', ' adkkb', 'bkhbhkbkhb', 'kbkhbkbk', 'bkbkbkjb', 'kbkjbjbk', 'bkbkbkbkb', 1, 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
