var question =[
	{
		title: '牙刷應多久更換一支才健康？',
		answer: [
			{
				text: '2週',
				correct: false
			},
			{
				text: '1個月',
				correct: true
			},
			{
				text: '用到炸毛為止',
				correct: false
			}
		],
		conclusion: ['牙刷月更換偵查精兵','關心口腔健康真愛認證']
	},
	{
		title: '題目2',
		answer: [
			{
				text: '我是對的',
				correct: true
			},
			{
				text: '我是錯的',
				correct: false
			},
			{
				text: '我是錯的',
				correct: false
			}
		],
		conclusion: ['牙刷月更換偵查精兵','關心口腔健康真愛認證']
	},
	{
		title: '題目3',
		answer: [
			{
				text: '錯',
				correct: false
			},
			{
				text: '對',
				correct: true
			},
			{
				text: '錯',
				correct: false
			}
		],
		conclusion: ['牙刷月更換偵查精兵','關心口腔健康真愛認證']
	},
	{
		title: '題目4',
		answer: [
			{
				text: '答案一',
				correct: true
			},
			{
				text: '答案二',
				correct: false
			},
			{
				text: '答案三',
				correct: false
			}
		],
		conclusion: ['牙刷月更換偵查精兵','關心口腔健康真愛認證']
	},
	{
		title: '題目5',
		answer: [
			{
				text: '答案一',
				correct: true
			},
			{
				text: '答案二',
				correct: false
			},
			{
				text: '答案三',
				correct: false
			}
		],
		conclusion: ['牙刷月更換偵查精兵','關心口腔健康真愛認證']
	},
	{
		title: '題目6',
		answer: [
			{
				text: '答案一',
				correct: true
			},
			{
				text: '答案二',
				correct: false
			},
			{
				text: '答案三',
				correct: false
			}
		],
		conclusion: ['牙刷月更換偵查精兵','關心口腔健康真愛認證']
	}
];
var qNum = 0;
function enterText(qNum){
	$('.question .text').text(question[qNum].title);
	for (var i=0; i<question[qNum].answer.length; i++) {
		$('.answer .text').eq(i).text(question[qNum].answer[i].text);
	}
}
enterText(qNum);

$('.start').click(function (e) { 
	e.preventDefault();
	$('.examItem').css('display','none');
	$('.examQA').css('display','block');
});

$('.answer').click(function (e) { 
	e.preventDefault();
	var aNum = $(this).data('answer');
	$('.examItem').css('display','none');
	$('.examResult').css('display','block');
	if (question[qNum].answer[aNum].correct == true){
		console.log('成功');
		$('.correct .content').text(question[qNum].conclusion);
		$('.examResult .correct').css('display','block');
	} else if (qNum == question.length - 1){
		console.log('全失敗');
		$('.examResult .allWrong').css('display','block');
	} else {
		console.log('失敗');
		qNum = qNum+1;
		$('.examResult .wrong').css('display','block');
	}
});

$('.getCoupon').click(function (e) { 
	e.preventDefault();
	$('.examItem').css('display','none');
	$('.examCoupon').css('display','block');
});

$('.nextQ').click(function (e) { 
	e.preventDefault();
	enterText(qNum);
	$('.examItem').css('display','none');
	$('.examQA').css('display','block');
});

$('.tryAgain').click(function (e) { 
	e.preventDefault();
	qNum = 0;
	$('.examItem').css('display','none');
	$('.examIndex').css('display','block');
});

var today = new Date(),
	milliseconds = today.getTime(),
	startDate = new Date(2020, (9-1), 5);
var visits = parseInt((today - startDate)/60000+500);
var visitsStr = visits.toString();
var strLength = visitsStr.length;

function setBox(){
	for( var box = 0; box < strLength; box++ ) {
		$('.visits01').after('<div class="numberBox"><span class="number animate">0<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>0</span></div>');
	}
}

function setNum(){
	for( var num = 0; num < strLength; num++ ) {
		(function(num){
			setTimeout(function() {
				$('.visits .number').eq(num).removeClass('animate').text(visitsStr[num]);
			}, 500 * num);
		})(num);
	}
}

$(document).ready(function () {
	setBox();

	setInterval(function(){
		today = new Date(),
		milliseconds = today.getTime();
		visits = parseInt((today - startDate)/60000+500);
		visitsStr = visits.toString();
		var remainder = ((today - startDate)%60000).toString();
			sec = remainder.substr(0,2);
			// console.log(sec);
			// console.log(remainder.length);
			// console.log(visits);
		if ((sec == '59') && (remainder.length == 5)){
			$('.visits .number').addClass('animate').html('0<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>0');
		} else {
			return;
		}
		setTimeout(function() {
			setNum();
		}, 1000);
	},1000);
});