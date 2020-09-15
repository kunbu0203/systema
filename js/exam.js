var question =[
	{
		title: '細潔無隱角EX抗敏護齦牙刷，每根刷毛尖端處又再分岔成幾根刷毛？',
		answer: [
			{
				text: '2根',
				correct: false
			},
			{
				text: '3根',
				correct: true
			},
			{
				text: '沒分岔1根到底',
				correct: false
			}
		],
		conclusion: '能屈能伸軟實力大丈夫<br>舒緩牙齦壓力超級有淨'
	},
	{
		title: '「護齦神盾」適齦佳修護PLUS牙膏的三大護齦保養配方能提供什麼幫助？',
		answer: [
			{
				text: '降低牙周病發生率',
				correct: false
			},
			{
				text: '幫助預防牙齦流血問題',
				correct: false
			},
			{
				text: '減少細菌滋生率',
				correct: false
			},
			{
				text: '以上皆是',
				correct: true
			}
		],
		conclusion: '牙刷月更換偵查精兵<br>關心口腔健康真愛認證'
	},
	{
		title: '漱口水越辣越有效嗎？',
		answer: [
			{
				text: '是',
				correct: false
			},
			{
				text: '否',
				correct: true
			}
		],
		conclusion: '溫和抗敵新一代宗師<br>以柔克剛消滅牙菌斑'
	},
	{
		title: '牙刷應多久更換一支才健康？',
		answer: [
			{
				text: '2周',
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
		conclusion: '牙刷月更換偵查精兵<br>關心口腔健康真愛認證'
	},
	{
		title: '牙膏和家人共用是否正確？',
		answer: [
			{
				text: '是',
				correct: false
			},
			{
				text: '否',
				correct: true
			}
		],
		conclusion: '牙刷月更換偵查精兵<br>關心口腔健康真愛認證'
	},
	{
		title: '以下哪項好習慣能防止病從口入？',
		answer: [
			{
				text: '共用餐具',
				correct: false
			},
			{
				text: '使用公筷母匙',
				correct: true
			},
			{
				text: '咳嗽不遮掩',
				correct: false
			}
		],
		conclusion: '月圓人團圓聚餐公筷母匙<br>朋友圈防疫護齦小達人'
	},
	{
		title: '如何挑選與使用護齦漱口水?',
		answer: [
			{
				text: '共用餐具',
				correct: false
			},
			{
				text: '使用公筷母匙',
				correct: true
			},
			{
				text: '咳嗽不遮掩',
				correct: false
			}
		],
		conclusion: '月圓人團圓聚餐公筷母匙<br>朋友圈防疫護齦小達人'
	}
];
var qNum = 0;
function enterText(qNum){
	$('.question .number').html('<img src="./images/exam_Q'+(qNum+1)+'.png" alt="">');
	$('.question .text').text(question[qNum].title);
	$('.answers').empty();
	for (var i=0; i<question[qNum].answer.length; i++) {
		$('.answers').append('<li class="answer" data-answer="'+i+'">'+question[qNum].answer[i].text+'</li>');
	}
}

$('.start,.answers,.getCoupon,.nextQ,.tryAgain').click(function (e) { 
	$('.examItem,.resultItem').fadeOut();
});

$('.start').click(function (e) { 
	e.preventDefault();
	enterText(qNum);
	$('.examQA').fadeIn();
});

$('.answers').click(function (e) { 
	if (e.target.nodeName !== 'LI'){
		return;
	}
	var aNum = e.target.dataset.answer;
	$('.examResult').fadeIn();
	if (question[qNum].answer[aNum].correct == true){
		console.log('成功');
		$('.correct .content .main').html(question[qNum].conclusion);
		$('.resultItem.correct').fadeIn();
	} else if (qNum == question.length - 1){
		console.log('全失敗');
		$('.resultItem.allWrong').fadeIn();
	} else {
		console.log('失敗');
		qNum = qNum+1;
		$('.resultItem.wrong').fadeIn();
	}
});

$('.getCoupon').click(function (e) { 
	e.preventDefault();
	$('.examCoupon').fadeIn();
});

$('.nextQ').click(function (e) { 
	e.preventDefault();
	enterText(qNum);
	$('.examQA').fadeIn();
});

$('.tryAgain').click(function (e) { 
	e.preventDefault();
	qNum = 0;
	$('.examIndex').fadeIn();
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

window.Clipboard = (function(window, document, navigator) {
	var textArea,
	copy;
	
	function isOS() {
		return navigator.userAgent.match(/ipad|iphone/i);
	}
	
	function createTextArea(text) {
		textArea = document.createElement('textArea');
		textArea.value = text;
		document.body.appendChild(textArea);
	}
	
	function selectText() {
		var range,
		selection;
		
		if (isOS()) {
			range = document.createRange();
			range.selectNodeContents(textArea);
			selection = window.getSelection();
			selection.removeAllRanges();
			selection.addRange(range);
			textArea.setSelectionRange(0, 999999);
		} else {
			textArea.select();
		}
	}
	
	function copyToClipboard() {
		document.execCommand("Copy");
		document.body.removeChild(textArea);
	}
	
	copy = function(text) {
		createTextArea(text);
		selectText();
		copyToClipboard();
	};
	
	return {
		copy: copy
	};
})(window, document, navigator);

// function download() {
// 	var image = new Image();
// 	image.crossOrigin = "anonymous";
// 	image.src = "../images/download_img.jpg";
// 	var fileName = image.src.split(/(\\|\/)/g).pop();
// 	image.onload = function () {
// 		var canvas = document.createElement('canvas');
// 		canvas.width = this.naturalWidth; // or 'width' if you want a special/scaled size
// 		canvas.height = this.naturalHeight; // or 'height' if you want a special/scaled size
// 		canvas.getContext('2d').drawImage(this, 0, 0);
// 		var blob;
// 		// ... get as Data URI
// 		if (image.src.indexOf(".jpg") > -1) {
// 		blob = canvas.toDataURL("image/jpeg");
// 		} else if (image.src.indexOf(".png") > -1) {
// 		blob = canvas.toDataURL("image/png");
// 		} else if (image.src.indexOf(".gif") > -1) {
// 		blob = canvas.toDataURL("image/gif");
// 		} else {
// 		blob = canvas.toDataURL("image/png");
// 		}
// 		$("body").html("<b>點擊下載圖片.</b><br><a download='" + fileName + "' href='" + blob + "'><img src='" + blob + "'/></a>");
// 	};
// }
	
	
$(document).ready(function () {
	setBox();

	setNum();

	$(".examCoupon .copy").on("click", function() {
		var $this = $(this),
		value = $this.prev("input").val();
		window.Clipboard.copy(value);
	});

	// setInterval(function(){
	// 	today = new Date(),
	// 	milliseconds = today.getTime();
	// 	visits = parseInt((today - startDate)/60000+500);
	// 	visitsStr = visits.toString();
	// 	var remainder = ((today - startDate)%60000).toString();
	// 		sec = remainder.substr(0,2);
	// 		// console.log(sec);
	// 		// console.log(remainder.length);
	// 		// console.log(visits);
	// 	if ((sec == '59') && (remainder.length == 5)){
	// 		$('.visits .number').addClass('animate').html('0<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>0');
	// 	} else {
	// 		return;
	// 	}
	// 	setTimeout(function() {
	// 		setNum();
	// 	}, 1000);
	// },1000);
});