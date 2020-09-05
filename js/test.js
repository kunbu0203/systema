var maxVisitors = 5000, // 最大訪客數
minVisitors = 3000, // 最小訪客數
today = new Date(),
year = today.getFullYear(),
month = today.getMonth() + 1,
date = today.getDate(),
hour = today.getHours(),
minute = today.getMinutes(),
second = today.getSeconds(),
time = today.getTime(),
seed, visitors;

seed = year * month * hour * minute;
visitors = seededRandom(maxVisitors, minVisitors);

function seededRandom(max, min) {
	seed = (seed * 9301 + 49297) % 233280;
	var rnd = seed / 233280;
	return Math.round(min + rnd * (max - min));
}

var Num = document.querySelector('.num');
var yearNum = document.querySelector('.year');
var monthNum = document.querySelector('.month');
var dateNum = document.querySelector('.date');
var hourNum = document.querySelector('.hour');
var minuteNum = document.querySelector('.minute');
var secondNum = document.querySelector('.second');
var timeNum = document.querySelector('.time');
// Num.textContent = visitors;
// yearNum .textContent = year;
// monthNum.textContent = month;
// dateNum.textContent = date;
// hourNum.textContent = hour;
// minuteNum.textContent = minute;
// secondNum.textContent = second;
// timeNum.textContent = time;
console.log(visitors);
console.log(year);
console.log(month);
console.log(date);
console.log(hour);
console.log(minute);
console.log(second);
console.log(time);
console.log('2912');