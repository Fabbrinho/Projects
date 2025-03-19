-- Progettazione Web 
DROP DATABASE if exists Fabbri_616288; 
CREATE DATABASE Fabbri_616288; 
USE Fabbri_616288; 
-- MySQL dump 10.13  Distrib 5.7.28, for Win64 (x86_64)
--
-- Host: localhost    Database: Fabbri_616288
-- ------------------------------------------------------
-- Server version	5.7.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bk_room`
--

DROP TABLE IF EXISTS `bk_room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bk_room` (
  `us_id` int(11) NOT NULL,
  `rm_id` int(11) NOT NULL,
  `dataInizioPren` date NOT NULL,
  `dataFinePren` date NOT NULL,
  `prezzo` double NOT NULL,
  `codicePrenotazione` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`codicePrenotazione`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bk_room`
--

LOCK TABLES `bk_room` WRITE;
/*!40000 ALTER TABLE `bk_room` DISABLE KEYS */;
INSERT INTO `bk_room` VALUES (3,11,'2024-08-20','2024-08-31',4400,23),(3,8,'2024-02-05','2024-02-10',1000,29),(1,7,'2024-02-01','2024-02-03',200,40),(1,11,'2024-01-25','2024-01-30',1600,41),(1,11,'2023-09-11','2023-09-15',1200,42),(3,9,'2024-02-02','2024-02-05',600,43),(3,12,'2023-09-12','2023-09-20',3600,44),(1,3,'2024-01-29','2024-02-01',400,45);
/*!40000 ALTER TABLE `bk_room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room`
--

DROP TABLE IF EXISTS `room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `room` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` varchar(10) NOT NULL,
  `n_bed` int(11) NOT NULL,
  `prezzo` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room`
--

LOCK TABLES `room` WRITE;
/*!40000 ALTER TABLE `room` DISABLE KEYS */;
INSERT INTO `room` VALUES (1,'Standard',2,50),(2,'Standard',2,50),(3,'Standard',4,50),(4,'Standard',4,50),(5,'Standard',5,50),(6,'Standard',5,50),(7,'Premium',2,100),(8,'Premium',2,100),(9,'Premium',4,100),(10,'Premium',4,100),(11,'Excelsior',2,200),(12,'Excelsior',4,200);
/*!40000 ALTER TABLE `room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utente`
--

DROP TABLE IF EXISTS `utente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `utente` (
  `nome` varchar(30) NOT NULL,
  `cognome` varchar(30) NOT NULL,
  `data` date NOT NULL,
  `codFiscale` varchar(30) NOT NULL,
  `cellulare` int(10) NOT NULL,
  `email` varchar(35) NOT NULL,
  `password` varchar(255) NOT NULL,
  `us_id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`us_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utente`
--

LOCK TABLES `utente` WRITE;
/*!40000 ALTER TABLE `utente` DISABLE KEYS */;
INSERT INTO `utente` VALUES ('Andrea','Fabbri','2002-01-25','FBBNDR02A25G843C',2147483647,'fabbria8@gmail.com','$2y$10$zGGq8h16rZL1CUVZHyD.juXJvrxyConmfu/t2qgd0B3AzJIRYcmUG',1),('Andrea','Fabbri','2002-01-25','FBBNDR02A25G843I',2147483647,'a.fabbri14@studenti.unipi.it','$2y$10$FKU7DAVRrmqxcb0ICUBKPuSAOHw7afTU1qHB9rk37o5i/zyVLVbXa',3);
/*!40000 ALTER TABLE `utente` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-10 14:53:30
