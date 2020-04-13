-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Апр 13 2020 г., 21:21
-- Версия сервера: 10.0.38-MariaDB
-- Версия PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `game`
--

-- --------------------------------------------------------

--
-- Структура таблицы `score`
--

CREATE TABLE `score` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `score` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `score`
--

INSERT INTO `score` (`id`, `name`, `score`) VALUES
(1, 'Anton', 5000),
(2, 'Andrey', 505),
(3, 'John', 5050),
(4, 'John', 5050),
(5, 'ddddd', 1000),
(6, 'ddddd', 1000),
(7, 'ddddd', 1000),
(8, 'ddddd', 1000),
(9, 'ddddd', 1000),
(10, 'ddddd', 1000),
(11, 'ddddd', 1000),
(12, 'ddddd', 1000),
(13, 'ddddd', 1000),
(14, 'Cadilla', 1000),
(15, 'см', 993),
(16, 'ап', 955),
(17, 'ап', 955),
(18, 'ап', 955);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `score`
--
ALTER TABLE `score`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `score`
--
ALTER TABLE `score`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
