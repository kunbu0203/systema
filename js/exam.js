var question =[
	{
		title: '細潔無隱角EX抗敏護齦牙刷，每根刷毛尖端處又再分岔成幾根刷毛？',
		answer: [
			{
				text: 'A. 2根',
				correct: false
			},
			{
				text: 'B. 3根',
				correct: true
			},
			{
				text: 'C. 沒分岔1根到底',
				correct: false
			}
		],
		conclusion: '能屈能伸軟實力大丈夫<br>舒緩牙齦壓力超級有淨',
		image: './images/knowledgeImg07.jpg'
	},
	{
		title: '「護齦神盾」適齦佳修護PLUS牙膏的三大護齦保養配方能提供什麼幫助？',
		answer: [
			{
				text: 'A. 降低牙周病發生率',
				correct: false
			},
			{
				text: 'B. 幫助預防牙齦流血問題',
				correct: false
			},
			{
				text: 'C. 減少細菌滋生率',
				correct: false
			},
			{
				text: 'D. 以上皆是',
				correct: true
			}
		],
		conclusion: '牙刷月更換偵查精兵<br>關心口腔健康真愛認證',
		image: './images/knowledgeImg05.jpg'
	},
	{
		title: '漱口水越辣越有效嗎？',
		answer: [
			{
				text: 'A. 是',
				correct: false
			},
			{
				text: 'B. 否',
				correct: true
			}
		],
		conclusion: '溫和抗敵新一代宗師<br>以柔克剛消滅牙菌斑',
		image: './images/knowledgeImg04.jpg'
	},
	{
		title: '牙刷應多久更換一支才健康？',
		answer: [
			{
				text: 'A. 2周',
				correct: false
			},
			{
				text: 'B. 1個月',
				correct: true
			},
			{
				text: 'C. 用到炸毛為止',
				correct: false
			}
		],
		conclusion: '牙刷月更換偵查精兵<br>關心口腔健康真愛認證',
		image: './images/knowledgeImg02.jpg'
	},
	{
		title: '牙膏和家人共用是否正確？',
		answer: [
			{
				text: 'A. 是',
				correct: false
			},
			{
				text: 'B. 否',
				correct: true
			}
		],
		conclusion: '牙刷月更換偵查精兵<br>關心口腔健康真愛認證',
		image: './images/knowledgeImg03.jpg'
	},
	{
		title: '以下哪項好習慣能防止病從口入？',
		answer: [
			{
				text: 'A. 共用餐具',
				correct: false
			},
			{
				text: 'B. 使用公筷母匙',
				correct: true
			},
			{
				text: 'C. 咳嗽不遮掩',
				correct: false
			}
		],
		conclusion: '月圓人團圓聚餐公筷母匙<br>朋友圈防疫護齦小達人',
		image: './images/knowledgeImg01.jpg'
	},
	{
		title: '如何挑選與使用護齦漱口水?',
		answer: [
			{
				text: 'A. 無添加酒精溫和低刺激',
				correct: false
			},
			{
				text: 'B. 有效成分能留存護齦',
				correct: false
			},
			{
				text: 'C. 使用後不需再用清水漱口',
				correct: false
			},
			{
				text: 'D. 以上皆是',
				correct: true
			}
		],
		conclusion: '最懂護齦做好做滿<br>真是（適）贏（齦）家（佳）',
		image: './images/knowledgeImg06.jpg'
	}
];
var qNum = 0;
function enterText(qNum){
	$('.answers,.examAction .examItem.examQA,.examTip .popupMain').empty();
	$('.question .number').html('<img src="./images/exam_Q'+(qNum+1)+'.png" alt="">');
	$('.examAction .examItem.examQA').html('<a href="#" class="examBtn tip Q'+qNum+'tip"><img src="./images/btn_tip.png" alt=""></a>');
	$('.examTip .popupMain').html('<img class="tipImg" src="'+question[qNum].image+'" alt=""><a href="#" class="popupClose popup'+qNum+'close"><img src="./images/popupClose.png" alt=""></a>');
	$('.question .text').text(question[qNum].title);
	for (var a=0; a<question[qNum].answer.length; a++) {
		$('.answers').append('<li class="answer" data-question="'+qNum+'" data-answer="'+a+'">'+question[qNum].answer[a].text+'</li>');
		$('[data-question="'+qNum+'"][data-answer="'+a+'"]').click(function (e) {
			e.preventDefault();
			var ansGA = $(this).data('answer');
			if ( ansGA == 0 ) {
				gtag('event', 'Click', {
					'event_category': '不做白工促淨會',
					'event_label': '#'+(qNum+1)+'_(A)',
				});
				// console.log('#'+(qNum+1)+'_(A)');
			} else if ( ansGA == 1 ) {
				gtag('event', 'Click', {
					'event_category': '不做白工促淨會',
					'event_label': '#'+(qNum+1)+'_(B)',
				});
				// console.log('#'+(qNum+1)+'_(B)');
			} else if ( ansGA == 2 ) {
				gtag('event', 'Click', {
					'event_category': '不做白工促淨會',
					'event_label': '#'+(qNum+1)+'_(C)',
				});
				// console.log('#'+(qNum+1)+'_(C)');
			} else if ( ansGA == 3 ) {
				gtag('event', 'Click', {
					'event_category': '不做白工促淨會',
					'event_label': '#'+(qNum+1)+'_(D)',
				});
				// console.log('#'+(qNum+1)+'_(D)');
			}
		});
	}
	$('.tip').click(function (e) { 
		e.preventDefault();
		$('.examTip').fadeIn();
		$('body').addClass('popupShow');
	});

	$('.popupClose').click(function (e) { 
		e.preventDefault();
		$('.popup').fadeOut();
		$('body').removeClass('popupShow');
	});

	$('.Q'+qNum+'tip').click(function (e) {
		e.preventDefault();
		gtag('event', 'Click', {
			'event_category': '不做白工促淨會',
			'event_label': '#'+(qNum+1)+'_溫馨提示',
		});
		console.log('#'+(qNum+1)+'_溫馨提示');
	});
	$('.popup'+qNum+'close').click(function (e) {
		e.preventDefault();
		gtag('event', 'Click', {
			'event_category': '不做白工促淨會',
			'event_label': '#'+(qNum+1)+'_溫馨提示關閉',
		});
		console.log('#'+(qNum+1)+'_溫馨提示關閉');
	});
}

var today = new Date(),
	startDate = new Date(2020, (9-1), 25),
	slowDownDate = new Date(2020, (10-1), 2);
var visits;

if (today < startDate) {
	visits = 0;
} else if (today > slowDownDate) {
	visits = parseInt(((slowDownDate - startDate)/300000)+((today - slowDownDate)/8640000));
} else {
	visits = parseInt((today - startDate)/300000);
}

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
	
	
$(document).ready(function () {
	setBox();

	// setNum();
	$('.start,.getCoupon,.nextQ,.tryAgain').click(function (e) { 
		e.preventDefault();
		$('.examItem,.resultItem').fadeOut();
	});
	
	$('.start').click(function (e) { 
		e.preventDefault();
		enterText(qNum);
		$('.examQA').fadeIn();
	});
	
	$('.answers').click(function (e) {
		e.preventDefault();
		if (e.target.nodeName !== 'LI'){
			return;
		}
		$('.examItem,.resultItem').fadeOut();
		var aNum = e.target.dataset.answer;
		$('.examResult').fadeIn();
		if (question[qNum].answer[aNum].correct == true){
			// console.log('成功');
			$('.correct .content .main').html(question[qNum].conclusion);
			$('.resultItem.correct').fadeIn();
			$('.examBtn.getCoupon').removeClass('Q'+(qNum-1)+'coupon').addClass('Q'+qNum+'coupon');
		} else if (qNum == question.length - 1){
			// console.log('全失敗');
			$('.resultItem.allWrong').fadeIn();
		} else {
			// console.log('失敗');
			qNum = qNum+1;
			$('.resultItem.wrong').fadeIn();
		}
		$('.Q'+qNum+'coupon').click(function (e) {
			e.preventDefault();
			gtag('event', 'Click', {
				'event_category': '不做白工促淨會',
				'event_label': '#'+(qNum+1)+'_領取獎勵',
			});
		});
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

	$(".examCoupon .copy").on("click", function() {
		var $this = $(this),
		value = $this.prev("input").val();
		window.Clipboard.copy(value);
		// $('html, body').scrollTop($this.offset().top);
		$('.examDownload').fadeIn();
		$('body').addClass('popupShow');
	});

	$('.tryAgain').click(function (e) { 
		e.preventDefault();
		qNum = 0;
		$('.examIndex').fadeIn();
		$('.visits .number').addClass('animate').html('0<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>0');
		setTimeout(function() {
			setNum();
		}, 1000);
	});

	$('.popupClose').click(function (e) { 
		e.preventDefault();
		$('.popup').fadeOut();
		$('body').removeClass('popupShow');
	});

	$('.method').click(function (e) { 
		e.preventDefault();
		$('.examMethod').fadeIn();
		$('body').addClass('popupShow');
	});

});