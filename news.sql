-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-02-10 15:49:32
-- 服务器版本： 10.1.10-MariaDB
-- PHP Version: 7.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `newsid` int(100) NOT NULL,
  `newstitle` varchar(1000) NOT NULL,
  `newsimg` varchar(1000) NOT NULL,
  `newscontent` varchar(1000) NOT NULL,
  `addtime` date NOT NULL,
  `source` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`newsid`, `newstitle`, `newsimg`, `newscontent`, `addtime`, `source`) VALUES
(1, '非居民用天然气价每立方降7毛', 'img/news01.jpg', '国家发改委宣布，自本月20日起降低非居民用天然气门站价格，将非居民用气最高门站价格每千立方米降...', '2015-11-03', '网易头条'),
(2, '新三板发布分层意见征求方案', 'img/news02.jpg', '为保证市场分层的动态管理，每年4月30日挂牌公司年报披露后，全国股转系统进行层级调整工作。', '2015-11-05', '腾讯要闻'),
(3, '山东一干部吃拿商户2个苹果 不给钱被通报', 'img/news03.jpg', '身为公职人员，吃拿商户苹果……根据规定，县纪委对魏衍顺诫勉谈话处理。', '2015-11-02', '搜狐要闻'),
(4, '豪车送修3天里程表涨6000 4S店:记程单位变了', 'img/news09.jpg', '按1英里等于1.609公里换算，10313英里等于16593公里，与16601公里相差无几。', '2015-11-08', '网易要闻'),
(5, '中央一号文件望给农村电商派发红包', 'img/news05.jpg', '离今年的中央农村工作会议召开还有一个月时间，市场上对2016年中央一号文件的期待正逐渐升温。', '2015-11-08', '网易头条'),
(6, '49股停牌超5个月 交易所整顿', 'img/news06.jpg', ' 停牌新规主要是针对规定发布后进行停牌的上市公司，对于新规发布前停牌的上市公司则不用按此规定实行。', '2015-11-07', '腾讯要闻'),
(7, '女子发现丈夫出轨果断卖房走人 网友:干得漂亮', 'img/news07.jpg', ' 愤而想出一连串的报复计划。', '2015-11-09', '新浪要闻'),
(8, '中国快递进入200亿件时代', 'img/news08.jpg', '在11月22日刚结束的中国物流企业家年会上，2015年全国快递业务量将可达到破纪录的200亿件。', '2015-11-02', '腾讯要闻');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`newsid`),
  ADD KEY `newsid` (`newsid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `newsid` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
